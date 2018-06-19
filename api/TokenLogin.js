import $ from 'jquery'
const  TokenLogin = async (element)=>{
  if(localStorage.getItem('MookUserToken') !== null){
    $.post('https://localhost:3000/login-token',{token: localStorage.getItem('MookUserToken')},data => {
      console.log(data);
      if(data.status === 'ERROR') return
      element.props.login(data)
      console.log(element.props.data);
    })
  }else{
    window.location = "https://localhost:3000/"
  }
}
export default TokenLogin
