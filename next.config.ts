import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // LP de oferta do playbook R$27 — HTML estático em public/novojogo/index.html
      { source: "/novojogo", destination: "/novojogo/index.html" },
    ];
  },
};

export default nextConfig;
