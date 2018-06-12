import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/mook/navbar'
import Topic from '../components/mook/topic'
import MookField from '../components/mook/mookField'
import Review from '../components/mook/review'
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
      <MookField/>
      <Review/>
    </body>
  </div>
)

export default Page(connect(state=>state)(page));
