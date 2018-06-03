import styled from 'styled-components'
import ResultChild from './resultChild'
const Container = styled.div`
  overflow: hidden;
  width: 100vw;
`
export default ()=>(
  <Container>
    <ResultChild/>
    <ResultChild/>
    <ResultChild/>
    <ResultChild/>
    <ResultChild/>
  </Container>
)
