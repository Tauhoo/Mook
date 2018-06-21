import styled from 'styled-components'
const Container = styled.div`
  margin-top: 50px;
  margin-left: calc(10vw - 10px);
  padding: 10px;
`
const Text =styled.span`
  font-size: 4.5rem;
  font-family: 'Kanit';
  color: #2d3436;
`
export default (props)=>(
  <Container>
    <Text>{props.name}</Text>
  </Container>
)
