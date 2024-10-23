import type { NextConfig } from "next";

const config = {
  crossOrigin: "anonymous",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: "standalone",
  poweredByHeader: false,
} satisfies NextConfig;

export default config;
