async function LoginFacebook(req, res){
  const code = req.query.code;
  var data = await this.axios.get('https://graph.facebook.com/v3.0/oauth/access_token?client_id=2106226559621691&redirect_uri=https://localhost:3000/&client_secret='+process.env.CLIENT_SECRET+'&code='+code)
  .then(function (response) {
    return response.data;
  })

  var userData = await this.axios.get('https://graph.facebook.com/me?fields=id,name,picture&access_token='+data.access_token)
  .then(function (response) {
    return response.data;
  })

  console.log(data);
  console.log(userData);

  return this.app.render(req, res, '/')
}

module.exports = { LoginFacebook : LoginFacebook }
