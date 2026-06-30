/** @type {import('next').NextConfig} */

// When building for GitHub Pages we produce a fully static export served from
// a project subpath (https://<user>.github.io/<repo>/). The GITHUB_PAGES env
// var is set by the deploy workflow so local dev / normal builds are unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "kitched-bathroom-demo";

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        trailingSlash: true,
      }
    : {}),
  images: {
    // Static export can't use the Next image optimiser, so serve images as-is.
    unoptimized: isGithubPages,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
