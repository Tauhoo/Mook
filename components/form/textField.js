import styled from 'styled-components'
const TextField = styled.textarea`
  height: 100%;
  width: calc(100% - 20px);
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border-width: 0px;
  font-family: 'Kanit';
  background-color: #dcdde1;
  resize: vertical;
  height: 30vh;
  #2d3436
`
const Container = styled.div`
  width: calc(80vw + 20px);
  margin-top: 20px;
  margin-left: 50vw;
  transform: translateX(-50%);
`
export default ()=>(
  <Container>
    <TextField placeholder='เขียนมุขลงในนี้'>
    </TextField>
  </Container>
)
