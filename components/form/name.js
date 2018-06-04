import styled from 'styled-components'
const Container = styled.div`
  margin-top: 20px;
  width: 100vw;
`
const Input = styled.input`
  transform: translateX(-50%);
  margin-left: 50%;
  font-size: 3rem;
  font-family: 'Kanit';
  color: #2d3436;
  width: 80%;
  border-width: 0px;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  outline: none;
  background-color: #bdc3c7;
`
export default ()=>(
  <Container>
    <Input placeholder='ชื่อมุข' />
  </Container>
)
