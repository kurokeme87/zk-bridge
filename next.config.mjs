/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // PROJECT_ID: "cFa79bluW1rTXvNWbU9D1Yty1V31CCCn56dEMOOO",
    PROJECT_ID: "d83a9d3860db6d32af24ee7229cfec17",
    APP_CLIENT_KEY: "cFa79bluW1rTXvNWbU9D1Yty1V31CCCn56dEMOOO",
    APP_ID: "4f450f58-7f9d-43fc-9acb-d130155095eb",
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
