import React, {Component} from 'react'
import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Topic from '../components/form/topic'
import Name from '../components/form/name'
import Tag from '../components/form/tag'
import TextField from '../components/form/textField'
import Submit from '../components/form/submit'
import Page from '../components/page.js'
import { connect } from 'react-redux'
import { LOGIN } from '../redux/action/action'
import $ from 'jquery'
class page extends Component {
  async componentDidMount(){
    if(localStorage.getItem('MookUserToken') !== null){
      $.post('https://localhost:3000/login-token',{token: localStorage.getItem('MookUserToken')},data => {
        this.props.login(data)
        console.log(this.props.data);
      })
    }else{
      window.location = "https://localhost:3000/"
    }
  }
  render(){
    return(
      <div>
        <Head>
          <title>Mook</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <style global jsx>
          {`
            body {
              margin: 0px;
              padding: 0px;
              overflow-x: hidden;
              width: 100vw;
              height: 100vh;
            }
            html {
              font-size: 62.5%;
            }
          `}
        </style>
        <body>
          <Navbar/>
          <Topic/>
          <Name/>
          <Tag/>
          <TextField/>
          <Submit/>
        </body>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    state : state.online,
    data: state.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login : (payload) => dispatch(LOGIN(payload)),
  }
}
export default Page(connect(mapStateToProps,mapDispatchToProps)(page));
