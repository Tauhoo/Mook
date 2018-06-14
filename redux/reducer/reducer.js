export default function reducer(state = {}, action) {
  switch (action.type){
    case 'LOGIN' :
      return Object.assign({},state,{online: true})
    case 'LOGOUT' :
      return Object.assign({},state,{online: false})
    default:
      return state
  }
}
