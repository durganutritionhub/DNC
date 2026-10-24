import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Non-www to www permanent redirect (Canonical domain enforcement)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dncwellnesshub.in',
          },
        ],
        destination: 'https://www.dncwellnesshub.in/:path*',
        permanent: true,
      },
      // 2. Root URL permanent redirect to /en
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
