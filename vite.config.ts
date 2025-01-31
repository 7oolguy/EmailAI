import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: parseInt(env.PORT || "3000"), // Use PORT from .env or default to 3000
      strictPort: true,
      open: true,
    },
    // Optional: Expose client-side env vars (only those with VITE_ prefix)
    define: {
      "process.env": env,
    },
  };
});
