import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
`
const InputContainer = styled.div`
  display: inline-block;
  float: left;
  width: calc(100% - 50px);
  overflow: hidden;
`
const Input = styled.div`
  position: relative;
  width: 200%;
  left: 0px;
`
const SearchInput = styled.input`
  width: calc(50% - 12px);
  font-size: 2rem;
  padding: 6px;
  outline: none;
  border: none;
  display: inline-block;
  border-radius: 10px;
  background-color: #bdc3c7;
  font-family: 'Kanit';
`
const CategoryInput = styled.select`
  width: calc(50%);
  font-size: 2rem;
  padding: 6px;
  outline: none;
  border: none;
  display: inline-block;
  border-radius: 10px;
  background-color: #bdc3c7;
  color: #2d3436;
  font-family: 'Kanit';
`
const ButtonContainer = styled.div`
  display: inline-block;
  float: right;
`
const ModeButton = styled.button`
  height: 45px;
  width: 45px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #2d3436;
  color: white;
`
export default ()=>(
  <Container>
    <InputContainer>
      <Input>
        <CategoryInput>
          <option>Q&A</option>
        </CategoryInput>
        <SearchInput/>
      </Input>
    </InputContainer>
    <ButtonContainer>
      <ModeButton style={{textAlign : 'center'}}>
        <i class="material-icons">cached</i>
      </ModeButton>
    </ButtonContainer>
  </Container>
)
