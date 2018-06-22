async function searchMook(req,res) {
  const data = req.body
  const query = {}
  if(data.type === 'NAME'){
    query.$text = {$search: data.keyword}
  }else{
    query.tag = {$all: [data.keyword]}
  }
  const mooks = await this.db.finds('mook',query).then((resolve)=>{
    resolve.db.close()
    return resolve.result
  })
  res.send(mooks)
}

module.exports = {searchMook}
