import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   redirects: async () => {
        return [
            {
                source: "/",
                destination: "/template",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
