/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com']
    },
    sassOptions: {
        includePaths: ['./src']
    },
};

export default nextConfig;
