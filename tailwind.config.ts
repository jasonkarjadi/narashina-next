import type { Config } from "tailwindcss";

const config = {
  content: ["./lib/components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
