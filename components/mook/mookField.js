import styled from 'styled-components'

const Container = styled.div`
  margin-left: calc(10vw - 10px);
`
const Text = styled.span`
  background-color: #f5f6fa;
  display: inline-block;
  width: 80vw;
  padding: 10px;
  border-radius: 10px;
  font-size: 2rem;
  font-family: 'Kanit';
  word-wrap: break-word;
  color: #2d3436;
  white-space: pre-line;
`
export default (props)=>(
  <Container>
    <Text>{props.text}</Text>
  </Container>
)
