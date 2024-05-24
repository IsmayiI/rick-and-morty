import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      container: {
         center: true,
      },
   },
   plugins: [],
};
export default config;
