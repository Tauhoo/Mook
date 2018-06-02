import styled from 'styled-components'
import Input from './input'
const Container = styled.div`
  top: 45vh;
  left: 50vw;
  position: absolute;
  transform: translate(-50%,-50%);
`
const TopicContainer = styled.div`
  text-align: center;
  overflow: hidden;
`
const Topic = styled.span`
  font-size: 10rem;
  font-family: 'Kanit';
  color: #2d3436;
`
export default ()=>(
  <Container>
    <TopicContainer><Topic>Mook</Topic></TopicContainer>
    <Input/>
  </Container>
)
