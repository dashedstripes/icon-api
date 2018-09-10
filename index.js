const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const WORDS = require('./data/words')

// Uses word from the params to find a matching icon
const findIconByWord = (word) => {
  let found = WORDS.filter((x) => x.word === word)
  return found.length > 0 ? { icon: found[0].icon } : found
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.get('/find/:word', (req, res) => {
  return res.json(findIconByWord(req.params.word))
})

app.listen(3000, () => console.log('http://localhost:3000'))