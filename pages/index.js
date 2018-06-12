import React, { Component } from 'react'
import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/home/navbar'
import Search from '../components/home/search'
import Background from '../components/home/background'
import Page from '../components/page.js'
import { connect } from 'react-redux'
class page extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
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

export default Page(connect(state=>state)(page));
