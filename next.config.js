/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    distDir: "build",

    async redirects() {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
        ];
    },

    trailingSlash: true,

    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static-cse.canva.com",
                pathname: "/blob/**",
            },
            {
                protocol: "https",
                hostname: "marketplace.canva.com",
            },
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
        ],
    },
};

module.exports = nextConfig;
