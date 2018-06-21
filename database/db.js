function mongodb() {
  this.MongoClient = require('mongodb').MongoClient;
  this.url = "mongodb://localhost:27017/mook";
}

mongodb.prototype.connect = function () {
  return new Promise(function(resolve, reject){
    this.MongoClient.connect(this.url, function(err, db) {
      if (err) throw err;
      return resolve({db:db})
    });
  }.bind(this))
}

mongodb.prototype.insert = function (col, data) {
  return new Promise(async function (resolve, reject) {
    var con = await this.connect().then(resolve => resolve)
    con.db.db('mook').collection(col).insertOne(data, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      return resolve({db: this.db, data: res})
    }.bind(con));
  }.bind(this))
}

mongodb.prototype.find = function (col, query) {
  return new Promise(async function (resolve, reject) {
    var con = await this.connect().then(resolve => resolve)
    con.db.db('mook').collection(col).findOne(query, function(err, result) {
      if (err) throw err;
      console.log("find!!!!");
      return resolve({db:this.db, result: result})
    }.bind(con));
  }.bind(this))
}

mongodb.prototype.update = function (col, query, newValue) {
  return new Promise(async function (resolve, reject) {
    var con = await this.connect().then(resolve => resolve)
    con.db.db('mook').collection(col).updateOne(query, {$set: newValue},function (err, res) {
      if (err) throw err;
      console.log("find!!!!");
      return resolve({db:this.db, res: res})
    }.bind(con))
  }.bind(this))
}
module.exports = new mongodb();
