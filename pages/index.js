import React, { Component } from 'react'
import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Search from '../components/home/search'
import Background from '../components/home/background'
import Page from '../components/page.js'
import { LOGIN } from '../redux/action/action'
import $ from "jquery";
import { connect } from 'react-redux'
class page extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    if(localStorage.getItem('MookUserToken') !== null){
      $.post('https://localhost:3000/login-token',{token: localStorage.getItem('MookUserToken')},data => {
        if(data.err == 'ERROR')return
        this.props.login(data)
        console.log(this.props.data);
      })
      return
    }
    var url = new URL(window.location.href);
    var code = url.searchParams.get("code");
    if(code === null) return;
    $.post('https://localhost:3000/login',{code: code},data => {
      localStorage.setItem('MookUserToken', data.token);
      this.props.login({
        'name': data.name,
        'picture': data.picture,
        'id': data.id
      })
    })
  }
  render(){
    return (
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
            }
            html {
              font-size: 62.5%;
            }
          `}
        </style>
        <body>
          <Navbar/>
          <Search/>
          <Background/>
        </body>
      </div>
    )}
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


export default Page(connect(
  mapStateToProps,
  mapDispatchToProps
)(page));
