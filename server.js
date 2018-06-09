const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const readUrl = require('./api/server/readUrl')

var axios = require('axios');
var path = require('path')
var fs = require('fs')
var https = require('https')
var certOptions = {
  key: fs.readFileSync(path.resolve('./CT/server.key')),
  cert: fs.readFileSync(path.resolve('./CT/server.cer'))
}

const homeMiddleware = require('./server/home/middleware');
const homeHandle = require('./server/home/handle');

app.prepare().then(() => {
  const server = express()
  server.use('/',homeMiddleware.checkIsNormal.bind(app))
  server.get('/', homeHandle.LoginFacebook.bind({axios : axios, app: app}))
  server.get('*', (req, res) => { handle(req, res) })
  https.createServer(certOptions, server).listen(3000)
})
