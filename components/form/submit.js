import styled from 'styled-components'
const Container = styled.div`
  margin-top: 10px;
  width: 100vw;
  margin-bottom: 20px;
`
const Button = styled.button`
  width: calc(80vw + 20px);
  margin-left: calc(10vw - 10px);
  outline: none;
  border-width: 0px;
  border-radius: 10px;
  font-size: 2rem;
  font-family: 'Kanit';
  color: #fff;
  background-color: #1abc9c;
`
export default ()=>(
  <Container>
    <Button>Publish</Button>
  </Container>
)
