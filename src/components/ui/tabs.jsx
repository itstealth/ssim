"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { toHashName } from "@/lib/hash-name"

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, hashValue, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    data-hash-value={hashValue}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

function getTabOptions(children) {
  const options = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === TabsContent) return;

    if (child.type === TabsTrigger) {
      const labelHash =
        toHashName(getTabLabel(child.props.children)) ||
        toHashName(child.props.value);
      options.push({
        value: child.props.value,
        hashValue: toHashName(child.props.hashValue) || labelHash,
      });
      return;
    }

    if (child.type === TabsList || child.type === React.Fragment) {
      options.push(...getTabOptions(child.props.children));
    }
  });

  return options;
}

function decodeHashPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function getTabLabel(children) {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTabLabel).filter(Boolean).join(" ");
  }

  if (!React.isValidElement(children) || children.props["aria-hidden"]) {
    return "";
  }

  return getTabLabel(children.props.children);
}

const Tabs = React.forwardRef(
  (
    {
      hashSync = true,
      hashScope,
      value,
      defaultValue,
      onValueChange,
      children,
      ...props
    },
    ref
  ) => {
    const tabOptions = React.useMemo(() => getTabOptions(children), [children]);
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const activeValue = isControlled ? value : internalValue;
    const lastWrittenHash = React.useRef(null);

    React.useEffect(() => {
      if (!hashSync) return;

      const syncFromHash = () => {
        if (lastWrittenHash.current === window.location.hash) {
          lastWrittenHash.current = null;
          return;
        }

        const hashParts = window.location.hash
          .slice(1)
          .split("/")
          .map(decodeHashPart);
        let requestedValue;

        if (hashScope) {
          if (toHashName(hashParts[0]) !== toHashName(hashScope)) return;
          const requestedHash = hashParts[1];
          const option = requestedHash
            ? tabOptions.find((item) => item.hashValue === toHashName(requestedHash)) ??
              tabOptions.find((item) => item.value === requestedHash)
            : tabOptions.find((item) => item.value === defaultValue);
          requestedValue = option?.value;

          if (option && requestedHash && requestedHash !== option.hashValue) {
            const url = new URL(window.location.href);
            url.hash = `${hashScope}/${option.hashValue}`;
            window.history.replaceState(window.history.state, "", url);
          }
        } else {
          if (hashParts.length !== 1) return;
          const option =
            tabOptions.find((item) => item.hashValue === toHashName(hashParts[0])) ??
            tabOptions.find((item) => item.value === hashParts[0]);
          requestedValue = option?.value;

          if (option && hashParts[0] !== option.hashValue) {
            const url = new URL(window.location.href);
            url.hash = option.hashValue;
            window.history.replaceState(window.history.state, "", url);
          }
        }

        if (!tabOptions.some((option) => option.value === requestedValue)) {
          return;
        }

        if (isControlled) {
          if (requestedValue !== activeValue) onValueChange?.(requestedValue);
        } else if (requestedValue !== internalValue) {
          setInternalValue(requestedValue);
        }
      };

      syncFromHash();
      window.addEventListener("hashchange", syncFromHash);
      window.addEventListener("popstate", syncFromHash);

      return () => {
        window.removeEventListener("hashchange", syncFromHash);
        window.removeEventListener("popstate", syncFromHash);
      };
    }, [
      activeValue,
      defaultValue,
      hashScope,
      hashSync,
      internalValue,
      isControlled,
      onValueChange,
      tabOptions,
    ]);

    const handleValueChange = (nextValue) => {
      if (hashSync) {
        if (!isControlled) setInternalValue(nextValue);

        const url = new URL(window.location.href);
        const hashValue =
          tabOptions.find((option) => option.value === nextValue)?.hashValue ??
          nextValue;
        url.hash = hashScope
          ? `${hashScope}/${hashValue}`
          : hashValue;
        const oldUrl = window.location.href;
        if (url.href !== oldUrl) {
          lastWrittenHash.current = url.hash;
          window.history.pushState(window.history.state, "", url);
          window.dispatchEvent(new Event("hashchange"));
        }
      }

      onValueChange?.(nextValue);
    };

    if (!hashSync) {
      return (
        <TabsPrimitive.Root
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          {...props}
        >
          {children}
        </TabsPrimitive.Root>
      );
    }

    return (
      <TabsPrimitive.Root
        ref={ref}
        value={activeValue}
        onValueChange={handleValueChange}
        {...props}
      >
        {children}
      </TabsPrimitive.Root>
    );
  }
);
Tabs.displayName = TabsPrimitive.Root.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent }
