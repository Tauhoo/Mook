import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/form/navbar'
import Topic from '../components/form/topic'
import Name from '../components/form/name'
import Tag from '../components/form/tag'
export default ()=>(
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
      <Topic/>
      <Name/>
      <Tag/>
    </body>
  </div>
)
