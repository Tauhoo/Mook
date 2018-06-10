function mongodb() {
  this.MongoClient = require('mongodb').MongoClient;
  this.url = "mongodb://localhost:27017/mook";
}

mongodb.prototype.connect = function () {
  return new Promise(function(resolve,reject){
    this.MongoClient.connect(this.url, function(err, db) {
      if (err) throw err;
      return resolve({db:db})
    });
  }.bind(this))
}

module.exports = new mongodb();
