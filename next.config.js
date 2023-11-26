/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
