"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { toHashName } from "@/lib/hash-name";

function decodeHashPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function useHashNavigation(defaultValue, items = [], legacyQueryKey) {
  const pathname = usePathname();
  const [activeValue, setActiveValue] = useState(defaultValue);
  const itemsRef = useRef(items);
  itemsRef.current = items.map((item) => {
    if (typeof item === "string") {
      return { value: item, hashValue: toHashName(item) };
    }

    const value = item.value ?? item.id;
    const name = item.hashValue ?? item.label ?? item.name ?? value;
    return { value, hashValue: toHashName(name) };
  });

  const getItemByValue = useCallback(
    (value) => itemsRef.current.find((item) => item.value === value),
    []
  );

  const getItemByHash = useCallback(
    (hash) => {
      const decodedHash = decodeHashPart(hash);
      return (
        itemsRef.current.find((item) => item.hashValue === decodedHash) ??
        itemsRef.current.find((item) => item.hashValue === toHashName(decodedHash)) ??
        itemsRef.current.find((item) => item.value === decodedHash)
      );
    },
    []
  );

  const readValueFromUrl = useCallback(() => {
    const url = new URL(window.location.href);
    const legacyValue = legacyQueryKey
      ? url.searchParams.get(legacyQueryKey)
      : null;
    const hashParts = url.hash.slice(1).split("/");
    const fragmentValue = decodeHashPart(hashParts[0]);
    const hashItem = fragmentValue ? getItemByHash(fragmentValue) : null;
    const legacyItem = legacyValue
      ? getItemByValue(legacyValue) ?? getItemByHash(legacyValue)
      : null;
    const requestedItem = hashItem ?? legacyItem;
    const requestedValue = requestedItem?.value ?? defaultValue;

    if (legacyValue) {
      url.searchParams.delete(legacyQueryKey);
    }

    if (requestedItem) {
      const canonicalParts = hashParts.map(decodeHashPart);
      canonicalParts[0] = requestedItem.hashValue;
      const canonicalHash = canonicalParts.join("/");
      if (url.hash.slice(1) !== canonicalHash) url.hash = canonicalHash;
    }

    if (legacyValue || (requestedItem && url.href !== window.location.href)) {
      window.history.replaceState(window.history.state, "", url);
    }

    return requestedValue;
  }, [defaultValue, getItemByHash, getItemByValue, legacyQueryKey]);

  useEffect(() => {
    const syncFromUrl = () => setActiveValue(readValueFromUrl());

    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.removeEventListener("hashchange", syncFromUrl);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, [pathname, readValueFromUrl]);

  const navigateToValue = useCallback(
    (nextValue) => {
      const value =
        typeof nextValue === "function" ? nextValue(activeValue) : nextValue;
      const item = getItemByValue(value);
      if (itemsRef.current.length > 0 && !item) return;

      setActiveValue(value);

      const url = new URL(window.location.href);
      if (legacyQueryKey) url.searchParams.delete(legacyQueryKey);
      url.hash = item?.hashValue ?? toHashName(value);

      if (url.href !== window.location.href) {
        window.history.pushState(window.history.state, "", url);
        window.dispatchEvent(new Event("hashchange"));
      }
    },
    [activeValue, getItemByValue, legacyQueryKey]
  );

  return [activeValue, navigateToValue];
}
