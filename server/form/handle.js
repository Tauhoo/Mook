async function InsertMook(req,res) {
  const mook = {...req.body.mook}
  const verifyToken = require('../verifyToken');
  const user = verifyToken(mook.token)
  if(user.status === 'ERROR') return res.send('faild')
  delete mook.token
  mook.userId = user.id
  await this.db.insert('mook', mook).then((resolve)=>{
    resolve.db.close()
  })
  res.send('success')
}

module.exports = {InsertMook}
