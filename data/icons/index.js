const glob = require('glob')
const path = require('path')

let icons = {}

glob.sync('./data/icons/!(index.js)').forEach((file) => {
  Object.assign(icons, require(path.resolve(file)))
})



module.exports = icons