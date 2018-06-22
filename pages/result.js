import React, {Component} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Top from '../components/result/top'
import Navbar from '../components/navbar'
import Result from '../components/result/result'
import Bottom from '../components/result/bottom'
import Page from '../components/page.js'
import { connect } from 'react-redux'
import TokenLogin from '../api/TokenLogin'
import {LOGIN} from '../redux/action/action'
import $ from 'jquery'
class page extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: []
    }
  }
  componentDidMount(){
    TokenLogin(this)

    var url = new URL(window.location.href);
    const keyword = url.searchParams.get('keyword');
    if(keyword === null) window.location = "https://localhost:3000/"
    const type = url.searchParams.get('type')
    $.post('https://localhost:3000/search-mook',{keyword,type},(res)=>{
      this.setState({result: res, keyword})
    })
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
              background-color: #ecf0f1;
              overflow-x: hidden;
              width: 100vw;
            }
            html {
              font-size: 62.5%;
            }
          `}
        </style>
        <body>
          <Navbar/>
          <Top keyword={this.state.keyword}/>
          <Result result={this.state.result}/>
          <Bottom/>
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


export default Page(connect(
  mapStateToProps,
  mapDispatchToProps
)(page));
