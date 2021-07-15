const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/auth/*", "/auth/google", "/users/*", "/chat/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
