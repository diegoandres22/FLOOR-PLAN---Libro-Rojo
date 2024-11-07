/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/admin/tienda', 
                permanent: false, 
            },
        ];
    },
};

export default nextConfig;


