const fs = require('fs')
const websocket = require('websocket-stream')

const writeStream = fs.createWriteStream('big.out')

writeStream.on('open', () => {
  let ws = websocket('http://localhost:8098')

  ws.pipe(writeStream)

  ws.on('error', (err) => {
    if (err) throw err
  }).on('close', (err) => {
    if (err) throw err
    console.log(`Closing ws with: ${fs.statSync('big.out').size} bytes`)
  })

  writeStream.on('close', () => {
    console.log(`Closing file stream with: ${fs.statSync('big.out').size} bytes`)
  })
})
