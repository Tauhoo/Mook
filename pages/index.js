import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/home/navbar'
export default ()=>(
  <div>
    <Head>
      <title>Mook</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'/>
    </Head>
    <style global jsx>
      {`
        body {
          margin: 0px;
          padding: 0px;
        }
        html {
          font-size: 62.5%;
        }
      `}
    </style>
    <body>
      <Navbar/>
    </body>
  </div>
)
