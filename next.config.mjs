/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
    }, ],
  },

  experimental: {
    turbo: false, // ❗ Disable Turbopack
  },

  webpack(config) {
    return config; // Keep Webpack as is
  },
};

export default nextConfig;
