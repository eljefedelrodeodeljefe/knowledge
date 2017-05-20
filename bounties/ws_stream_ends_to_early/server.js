const WebSocketServer = require('ws').Server
const websocketStream = require('websocket-stream')

const wss = new WebSocketServer({port: 8098})
const fs = require('fs')

wss.on('connection', function (ws) {
  console.log('opened connection')
  const stream = websocketStream(ws)
  const rs = fs.createReadStream('foo.big')
  rs.pipe(stream)
})
