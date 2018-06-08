const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const readUrl = require('./api/server/readUrl')

var request = require('request');
var path = require('path')
var fs = require('fs')
var https = require('https')
var certOptions = {
  key: fs.readFileSync(path.resolve('./CT/server.key')),
  cert: fs.readFileSync(path.resolve('./CT/server.cer'))
}

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const data = readUrl(url);
    if(typeof data == 'undefined'){
      return app.render(req, res, '/')
    }
    console.log(data.code[0]);
    request('https://graph.facebook.com/v3.0/oauth/access_token?client_id=2106226559621691&redirect_uri=https://localhost:3000/&client_secret='+process.env.CLIENT_SECRET+'&code='+data.code[0], { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
      console.log(body);
    });
    res.set({
      'username':'wachirawit',
      'email':'tauhoo_ice@hotmail.com'
    })
    return app.render(req, res, '/')
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  https.createServer(certOptions, server).listen(3000)
})
