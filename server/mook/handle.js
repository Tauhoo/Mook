const findMook = async function(req,res){
  const query = req.body
  var mongo = require('mongodb');
  var o_id = new mongo.ObjectID(query._id);
  query._id = o_id
  const data = await this.db.find('mook', query).then((resolve)=>{
    resolve.db.close()
    return resolve.result
  })
  res.send(data)
}

const removeMook = async function(req,res){
  const query = req.body
  var mongo = require('mongodb');
  var o_id = new mongo.ObjectID(query._id);
  query._id = o_id
  const data = await this.db.remove('mook', query).then((resolve)=>{
    resolve.db.close()
    return resolve.result
  })
  res.send(data)
}

const searchUser = async function (req,res) {
  const query = {id: req.body.id}
  const data = await this.db.find('user', query).then((resolve)=>{
    resolve.db.close()
    return resolve.result
  })
  res.send(data)
}

module.exports = {findMook, removeMook, searchUser}
