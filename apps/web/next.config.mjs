/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/trpc", "@workspace/auth"],
};

export default nextConfig;
