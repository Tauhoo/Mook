export default (state = {}, action) => {
  switch (action.type){
    case 'LOGIN' :
      return Object.assign({},state,{online: true,data: action.payload})
    case 'LOGOUT' :
      return Object.assign({},state,{online: false,data: {}})
    case 'INPUT' :
      return Object.assign({},state,{form: InputToForm(state,action)})
    default:
      return state
  }
}

const InputToForm = (state,action) => {
  result = {...state}.form || {}
  switch(action.inputType){
    case 'NAME':
      result.name = action.data.text
      return result
    case 'TAGE':
      result.tag[action.data.index] = action.data.text
      return result
    case 'TEXT':
      result.text = action.data.text
      return result
    default:
      return state
  }
}
