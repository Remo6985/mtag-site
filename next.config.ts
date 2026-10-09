import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ponytail: static export for GitHub Pages hosting; drop basePath + export when moving to
  // a host that serves at root (Cloudflare Pages / Netlify / fixed Vercel).
  output: "export",
  basePath: "/mtag-site",
};

export default nextConfig;
