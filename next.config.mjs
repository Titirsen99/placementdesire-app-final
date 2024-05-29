// next.config.mjs

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'files.edgestore.dev','cdn.pixabay.com', 'upload.wikimedia.org'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file.edgestore.dev"
      }
    ]
  },
  reactStrictMode: false
};

export default nextConfig;

