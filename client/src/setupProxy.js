// create proxy from react app to backend while on development

const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(proxy('/api/*', { target: 'http://localhost:3001' }))
}