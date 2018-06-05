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
`
export default ()=>(
  <Container>
    <Text>
    iiiiiiiiiiYYYYYYYYYY<br/>
    YYYYYYYYYYYYYYYYYiii<br/>
    iii<br/>
    iiiiiiiiiiiiiii<br/>
    iiiiiiiiiii<br/>
    iiiiiiiiiiiiiiii<br/>
    iiiiiiwwwwwwwwwwwww<br/>
    wwwwwww<br/>
    wwwwwwwwww<br/>
    wwwwwwwwwwwwwwwwwwwwiiiiii
    </Text>
  </Container>
)
