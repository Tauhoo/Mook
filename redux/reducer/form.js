export default (state = {}, action) => {
  if(action.type !== 'INPUT') return state
  switch (action.inputType){
    case 'NAME' :
      return Object.assign({},state,{name: action.data.text})
    case 'TAG' :
      var taglist = state.tag ? [...state.tag] : []
      taglist[action.data.index] = action.data.text
      return Object.assign({},state,{tag: taglist})
    case 'TEXT' :
      return Object.assign({},state,{text: action.data.text})
    default:
      return state
  }
}
