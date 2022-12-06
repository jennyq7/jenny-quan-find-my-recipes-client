const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({ 
    target: 'https://platform.fatsecret.com/rest/server.api?method=recipes.search.v2&format=json&max_results=50&oauth_signature_method=HMAC-SHA1',
    changeOrigin: true,})
  );
};