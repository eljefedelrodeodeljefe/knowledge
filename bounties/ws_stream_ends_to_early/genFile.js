const fs = require('fs')
const crypto = require('crypto')

function genFile (cb) {
  fs.open('foo.big', 'w', (err, fd) => {
    if (err) return cb(err)

    crypto.randomBytes(500000000, (err, buf) => {
      if (err) return cb(err)

      fs.write(fd, buf, (err) => {
        if (err) return cb(err)

        fs.close(fd, (err) => {
          if (err) return cb(err)

          return cb(null)
        })
      })
    })
  })
}

module.exports = genFile

if (require.main === module) {
  genFile(() => {})
}
