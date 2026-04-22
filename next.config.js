/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Fix for @heroui/dom-animation build issue
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules\/@heroui\/dom-animation/,
      type: 'javascript/auto',
    });

    return config;
  },
};

module.exports = nextConfig;
