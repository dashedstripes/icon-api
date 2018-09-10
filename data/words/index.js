const glob = require('glob')
const path = require('path')

let words = []

glob.sync('./data/words/!(index.js)').forEach((file) => {
  words.push(require(path.resolve(file)))
})

// Flatten array and concat
module.exports = words.concat.apply([], words)