async function InsertMook(req,res) {
  const mook = {...req.body.mook}
  const verifyToken = require('../verifyToken');
  const user = verifyToken(mook.token)
  if(user.status === 'ERROR') return res.send({status: 'faild'})
  delete mook.token
  mook.userId = user.id
  const data = await this.db.insert('mook', mook).then((resolve)=>{
    resolve.db.close()
    return resolve.data
  })
  res.send({ status: 'success', ...data.ops[0] })
}

module.exports = {InsertMook}
