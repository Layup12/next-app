/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
        ];
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

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
