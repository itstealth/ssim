"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useHashNavigation(defaultValue, validValues = [], legacyQueryKey) {
  const [activeValue, setActiveValue] = useState(defaultValue);
  const validValuesRef = useRef(validValues);
  validValuesRef.current = validValues;

  const readValueFromUrl = useCallback(() => {
    const url = new URL(window.location.href);
    const legacyValue = legacyQueryKey
      ? url.searchParams.get(legacyQueryKey)
      : null;
    const fragmentValue = url.hash.slice(1).split("/")[0];
    const requestedValue = fragmentValue || legacyValue || defaultValue;

    if (legacyValue) {
      url.searchParams.delete(legacyQueryKey);
      if (!url.hash) url.hash = legacyValue;
      window.history.replaceState(window.history.state, "", url);
    }

    const allowedValues = validValuesRef.current;
    return allowedValues.length === 0 || allowedValues.includes(requestedValue)
      ? requestedValue
      : defaultValue;
  }, [defaultValue, legacyQueryKey]);

  useEffect(() => {
    const syncFromUrl = () => setActiveValue(readValueFromUrl());

    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.removeEventListener("hashchange", syncFromUrl);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, [readValueFromUrl]);

  const navigateToValue = useCallback(
    (nextValue) => {
      const value =
        typeof nextValue === "function" ? nextValue(activeValue) : nextValue;
      const allowedValues = validValuesRef.current;
      if (allowedValues.length > 0 && !allowedValues.includes(value)) return;

      setActiveValue(value);

      const url = new URL(window.location.href);
      if (legacyQueryKey) url.searchParams.delete(legacyQueryKey);
      url.hash = value;

      if (url.href !== window.location.href) {
        window.history.pushState(window.history.state, "", url);
        window.dispatchEvent(new Event("hashchange"));
      }
    },
    [activeValue, legacyQueryKey]
  );

  return [activeValue, navigateToValue];
}
