export default function reducer(state = {}, action) {
  console.log(state)
  console.log(action);;
  switch (action.type){
    case 'LOGIN' :
      return Object.assign({online: true}, state)
    case 'LOGOUT' :
      return Object.assign({online: false}, state)
    default:
      return state
  }
}
