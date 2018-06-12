async function LoginFacebook(req, res){
  if(req.query.code === undefined){
    return this.app.render(req, res, req.originalUrl)
  }
  const code = req.query.code;
  var data = await this.axios.get('https://graph.facebook.com/v3.0/oauth/access_token?client_id=2106226559621691&redirect_uri=https://localhost:3000/&client_secret='+process.env.CLIENT_SECRET+'&code='+code)
  .then(function (response) {
    return response.data;
  })

  var userData = await this.axios.get('https://graph.facebook.com/me?fields=id,name,picture&access_token='+data.access_token)
  .then(function (response) {
    return response.data;
  })

  await this.db.insert('user',{code: code, ...userData}).then(function (resolve) {
    resolve.db.close()
  });

  return this.app.render(req, res, '/')
}

async function Login(req, res) {
  await this.db.find('user',{code: req.body.code}).then(function (resolve) {
    res.send(resolve.result)
    return resolve.db.close()
  });
}
module.exports = { LoginFacebook : LoginFacebook ,Login : Login}
