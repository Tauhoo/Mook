export default function (state = {}, action) {
  switch (action.type){
    case 'LOGIN' :
      return Object.assign({},state,{online: true,data: action.payload})
    case 'LOGOUT' :
      return Object.assign({},state,{online: false,data: {}})
    default:
      return state
  }
}
