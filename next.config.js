/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        serverActions: true
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/**'
            }
        ]
    }
};

module.exports = nextConfig;
