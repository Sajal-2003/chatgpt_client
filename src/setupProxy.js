const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://chatgpt-backend-1ss4.onrender.com",
      changeOrigin: true,
    })
  );
};
