/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  // Enable source map if needed
  productionBrowserSourceMaps: true
};

module.exports = nextConfig;
