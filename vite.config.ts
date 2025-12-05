import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "default",
      },
    }),
  ],

  // Környezeti változók kezelése
  define: {
    "process.env": process.env,
  },

  // Path aliasok
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@db": path.resolve(__dirname, "./src/db"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@features": path.resolve(__dirname, "./src/features"),
      // React duplikáció elkerülése
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    dedupe: ["react", "react-dom"], // Biztosítja, hogy csak egy React példány legyen
  },

  // Build optimalizációk
  build: {
    target: "es2015",
    outDir: "dist",
    sourcemap: mode === "development",
    minify: mode === "production" ? "esbuild" : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 1000,
  },

  // ESBuild konfiguráció
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },

  // Dependency optimalizáció
  optimizeDeps: {
    exclude: ["babel-plugin-macros"],
    include: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
    force: true, // Újra optimalizálja a dependenciákat
  },

  // SSR konfiguráció (ha használod)
  ssr: {
    noExternal: ["styled-components", "@mui/styled-engine-sc"],
  },

  // Development szerver
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ["**/node_modules/**", "**/dist/**"],
    },
  },

  // Preview szerver (production build preview-hoz)
  preview: {
    host: "::",
    port: 4173,
    strictPort: false,
    open: false,
  },

  // Teljesítmény optimalizáció
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}));
