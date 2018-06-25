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

const homeHandle = require('./server/home/handle')
const formHandle = require('./server/form/handle')
const mookHandle = require('./server/mook/handle')
const resultHandle = require('./server/result/handle')
app.prepare().then(() => {
  const server = express()
  server.use( bodyParser.json() );       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  //normal access
  //server.use('/',homeMiddleware.checkIsNormal.bind(app))
  //Login
  server.get('/', homeHandle.LoginFacebook.bind({axios, app, db}))
  server.post('/login',homeHandle.Login.bind({db}))
  server.post('/login-token',homeHandle.TokenLogin.bind({db}))
  server.post('/add-mook',formHandle.InsertMook.bind({db}))
  server.post('/get-mook',mookHandle.findMook.bind({db}))
  server.post('/remove-mook',mookHandle.removeMook.bind({db}))
  server.post('/get-user',mookHandle.searchUser.bind({db}))
  server.post('/search-mook',resultHandle.searchMook.bind({db}))
  server.get('*', (req, res) => { handle(req, res) })
  https.createServer(certOptions, server).listen(3000)
})
