/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    sassOptions: {
        additionalData: `$var: red;`,
    },
};

export default nextConfig;
