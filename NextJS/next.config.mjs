/** @type {import('next').NextConfig} */
const nextConfig = {
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
