const findMook = async function(req,res){
  const query = req.body
  console.log(query);
  var mongo = require('mongodb');
  var o_id = new mongo.ObjectID(query._id);
  query._id = o_id
  const data = await this.db.find('mook', query).then((resolve)=>{
    resolve.db.close()
    return resolve.result
  })
  res.send(data)
}
module.exports = {findMook}
