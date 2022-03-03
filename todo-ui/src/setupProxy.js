const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log("Hello")
  app.use(
    '/authenticate',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/users/*',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};