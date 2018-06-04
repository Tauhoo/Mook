import styled from 'styled-components'
const Container = styled.select`
  padding: 3px;
  margin: 3px;
  font-family: 'Kanit';
  border-width: 0px;
  border-radius: 10px;
  width: calc(100%/4 - 6px);
  color: #2d3436;
  outline: none;
`
export default ()=>(
  <Container>
    <option>Tag</option>
    <option>Q&A</option>
  </Container>
)
