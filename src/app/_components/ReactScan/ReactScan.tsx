"use client";

/**
 * react-scan must be imported before react
 * @see https://github.com/aidenybai/react-scan/blob/main/docs/installation/next-js-app-router.md#as-a-module-import
 */
/* eslint-disable import/order */
import { scan } from "react-scan";
import { useEffect } from "react";

import type { JSX } from "react";

export function ReactScan(): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}
