// vite.config.js
import { defineConfig } from "file:///D:/react-app/coco2/gitLab2211/coco-atnd/node_modules/vite/dist/node/index.js";
import react from "file:///D:/react-app/coco2/gitLab2211/coco-atnd/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import styleImport from "file:///D:/react-app/coco2/gitLab2211/coco-atnd/node_modules/vite-plugin-style-import/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\react-app\\coco2\\gitLab2211\\coco-atnd";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: true
  },
  resolve: {
    alias: {
      "@": path.join(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#13c2c2" }
      }
    },
    modules: {
      localsConvention: "camelCase"
    }
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFjdC1hcHBcXFxcY29jbzJcXFxcZ2l0TGFiMjIxMVxcXFxjb2NvLWF0bmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHJlYWN0LWFwcFxcXFxjb2NvMlxcXFxnaXRMYWIyMjExXFxcXGNvY28tYXRuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcmVhY3QtYXBwL2NvY28yL2dpdExhYjIyMTEvY29jby1hdG5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgc3R5bGVJbXBvcnQgZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcclxuLy8gaW1wb3J0IHZpdGVTdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBzZXJ2ZXI6e1xyXG4gICAgcG9ydDozMDAwLFxyXG4gICAgaG9zdDogdHJ1ZVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBtb2RpZnlWYXJzOiB7ICdAcHJpbWFyeS1jb2xvcic6ICcjMTNjMmMyJyB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyAuLi4uXHJcbiAgICB9LFxyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICAvLyB2aXRlU3ZncigpLFxyXG4gICAgcmVhY3QoKSxcclxuICAgIHN0eWxlSW1wb3J0KHtcclxuICAgICAgbGliczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxpYnJhcnlOYW1lOiAnYW50ZCcsXHJcbiAgICAgICAgICBlc01vZHVsZTogdHJ1ZSxcclxuICAgICAgICAgIHJlc29sdmVTdHlsZTogKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBhbnRkL2VzLyR7bmFtZX0vc3R5bGUvaW5kZXhgO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVQsU0FBUyxvQkFBb0I7QUFDOVUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGlCQUFpQjtBQUh4QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFPO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLEtBQUssa0NBQVcsS0FBSztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsWUFBWSxFQUFFLGtCQUFrQixVQUFVO0FBQUEsTUFDNUM7QUFBQSxJQUVGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxrQkFBa0I7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUVQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixjQUFjLENBQUMsU0FBUztBQUN0QixtQkFBTyxXQUFXO0FBQUEsVUFDcEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
