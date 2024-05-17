/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_API_KEY:process.env.OPENAI_API_KEY,
        FIREBASE_API_KEY:process.env.FIREBASE_API_KEY,
        AUTH_DOMAIN:process.env.AUTH_DOMAIN,
        PROJECT_ID:process.env.PROJECT_ID,
        STORAGE_BUCKET:process.env.STORAGE_BUCKET,
        MSG_SENDER_ID:process.env.MSG_SENDER_ID,
        APP_ID:process.env.APP_ID,
        MEASURE_ID:process.env.MEASURE_ID
    }
}

module.exports = nextConfig
