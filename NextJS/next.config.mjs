/** @type {import('next').NextConfig} */



const nextConfig = {
    experimental: {
        reactCompiler: true,
    },

    env: {
        customKey: 'my-value',

    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },

        ]
    },
    // basePath: ""
};

export default nextConfig;
