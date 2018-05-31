import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
`
const InputContainer = styled.div`
  display: inline-block;
  float: left;
  width: calc(100% - 47px);
  overflow: hidden;
`
const Input = styled.div`
  margin-left: 0px;
  position: relative;
  width: 100%;
  left: 0px;
`
const SearchInput = styled.input`
  width: 100%;
  font-size: 3rem;
  padding: 6px;
  outline: none;
  background-color: gray;
  border: none;
`
const ButtonContainer = styled.div`
  display: inline-block;
  float: right;
`
const ModeButton = styled.button`
  height: 47px;
  width: 47px;
`
export default ()=>(
  <Container>
    <InputContainer>
      <Input>
        <SearchInput/>
      </Input>
    </InputContainer>
    <ButtonContainer>
      <ModeButton/>
    </ButtonContainer>
  </Container>
)
