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
import TokenLogin from '../api/TokenLogin'

class page extends Component {
  componentDidMount(){
    TokenLogin(this)
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
    state : state.appReducer.online,
    data: state.appReducer.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login : (payload) => dispatch(LOGIN(payload)),
  }
}
export default Page(connect(mapStateToProps,mapDispatchToProps)(page));
