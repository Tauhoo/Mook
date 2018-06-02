import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: -1;
  top: 0px;
  left: 0px;
  overflow: hidden;
`
const Image = styled.div`
  background: url(/static/background.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -2;
`
export default ()=>(
  <Container>
    <Image/>
  </Container>
)
