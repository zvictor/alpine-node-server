const http = require('http')
const mysql = require('mysql')

const MYSQL = 'mysql://user:pass@example.com:3306/dbname'

console.log('Connecting to MYSQL', MYSQL)
var connection = mysql.createConnection(MYSQL);
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

const server = http.createServer((req, res) => {
  res.end('Hello DevOps!')
})

server.listen(9000, () => {
  console.log('Listening on', 9000)
})
