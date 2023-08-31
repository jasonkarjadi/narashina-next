/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/books", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        hostname: "gtksuwsuhkpfzkskdbwf.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
