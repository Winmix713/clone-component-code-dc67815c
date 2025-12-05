import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@db": path.resolve(__dirname, "./src/db"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
    },
  },
}));
