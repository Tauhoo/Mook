import Head from 'next/head'
import styled from 'styled-components'
import Top from '../components/result/top'
import Navbar from '../components/result/navbar'
import Result from '../components/result/result'
import Bottom from '../components/result/bottom'
import Page from '../components/page.js'
import { connect } from 'react-redux'
const page = ()=>(
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
      <Top/>
      <Result/>
      <Bottom/>
    </body>
  </div>
)
export default Page(connect(state=>state)(page));
