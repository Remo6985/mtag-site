import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ponytail: GitHub Pages needs static export at a subpath; everything else serves at root.
  // Build Pages with: GITHUB_PAGES=1 npx next build
  ...(process.env.GITHUB_PAGES
    ? { output: "export" as const, basePath: "/mtag-site" }
    : {}),
};

export default nextConfig;
