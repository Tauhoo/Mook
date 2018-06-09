
function checkIsNormal(req, res, next){
  if(req.query.code === undefined){
    return this.render(req, res, '/')
  }
  next()
}

module.exports = { checkIsNormal : checkIsNormal }
