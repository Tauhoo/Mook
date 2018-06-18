const jwt = require('jsonwebtoken')
const validate = (token) => {
  try {
    return jwt.verify(token,  process.env.SECRET_TOKEN);
  } catch (e) {
    return 'ERROR';
  }
}
module.exports = validate
