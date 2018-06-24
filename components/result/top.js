import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height:30vh;
  background-color: #f1c40f;
`
const Topic = styled.div`
  transform: translate(-50%,-50%);
  position: relative;
  top: 56%;
  left: 50vw;
  text-align: center;
`
const Text = styled.div`
  font-size: 5rem;
  font-family: 'Kanit';
  color: #2d3436;
  white-space: pre-line;
`
export default (props)=>(
  <Container>
    <Topic><Text>{'"'+props.keyword+'"'}</Text></Topic>
  </Container>
)
