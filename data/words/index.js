const glob = require('glob')
const path = require('path')

let words = []

glob.sync('./data/words/!(index.js)').forEach((file) => {
  Object.assign(words, require(path.resolve(file)))
})

module.exports = words