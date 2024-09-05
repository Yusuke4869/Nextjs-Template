/** @type {import('next').NextConfig} */
module.exports = {
  crossOrigin: "anonymous",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: "standalone",
  poweredByHeader: false,
};
