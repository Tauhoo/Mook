const jwt = require('jsonwebtoken')
const validate = (token) => {
  if(process.env.SECRET_TOKEN === undefined) console.log('SECRET_TOKEN is undefined');
  try {
    return {...jwt.verify(token,  process.env.SECRET_TOKEN), status:'SUCCESS'};
  } catch (e) {
    return {status:'ERROR', ...e};
  }
}
module.exports = validate
