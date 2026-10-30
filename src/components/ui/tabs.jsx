"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

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

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
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

function getTabValues(children) {
  const values = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === TabsContent) return;

    if (child.type === TabsTrigger) {
      values.push(child.props.value);
      return;
    }

    if (child.type === TabsList || child.type === React.Fragment) {
      values.push(...getTabValues(child.props.children));
    }
  });

  return values;
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
    const tabValues = React.useMemo(() => getTabValues(children), [children]);
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

        const hashParts = window.location.hash.slice(1).split("/");
        let requestedValue;

        if (hashScope) {
          if (hashParts[0] !== hashScope) return;
          requestedValue = hashParts[1] || defaultValue;
        } else {
          if (hashParts.length !== 1) return;
          requestedValue = hashParts[0];
        }

        if (!tabValues.includes(requestedValue)) return;

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
      tabValues,
    ]);

    const handleValueChange = (nextValue) => {
      if (hashSync) {
        if (!isControlled) setInternalValue(nextValue);

        const url = new URL(window.location.href);
        url.hash = hashScope ? `${hashScope}/${nextValue}` : nextValue;
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
