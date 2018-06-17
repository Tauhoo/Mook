const jwt = require('jsonwebtoken')
const validate = (token) => {
  try {
    return jwt.verify(token,  process.env.CLIENT_SECRET);
  } catch (e) {
    return 'ERROR';
  }
}
module.exports = validate
