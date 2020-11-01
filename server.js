const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`https://apifito.herokuapp.com/api/v1/cotacao`);
});