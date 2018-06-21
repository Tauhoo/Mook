import $ from 'jquery'
const  TokenLogin = (element)=>{
  if(localStorage.getItem('MookUserToken') !== null){
    $.post('https://localhost:3000/login-token',{token: localStorage.getItem('MookUserToken')},(data) => {
      if(data.status === 'ERROR') return
      element.props.login(data)
    })
  }else{
    if(window.location.pathname === '/')return
    window.location = "https://localhost:3000/"
  }
}
export default TokenLogin
