const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const db = require('./database/db.js')

var axios = require('axios');
var path = require('path')
var fs = require('fs')
var https = require('https')
var certOptions = {
  key: fs.readFileSync(path.resolve('./CT/server.key')),
  cert: fs.readFileSync(path.resolve('./CT/server.cer'))
}

const homeHandle = require('./server/home/handle');
app.prepare().then(() => {
  const server = express()
  server.use( bodyParser.json() );       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  //normal access
  //server.use('/',homeMiddleware.checkIsNormal.bind(app))
  //Login
  server.get('/', homeHandle.LoginFacebook.bind({axios : axios, app: app, db: db}))
  server.post('/login',homeHandle.Login.bind({ db: db}))
  server.post('/login-token',homeHandle.TokenLogin)
  server.get('*', (req, res) => { handle(req, res) })
  https.createServer(certOptions, server).listen(3000)
})
