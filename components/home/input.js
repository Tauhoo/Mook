import styled from 'styled-components'
import React,{ Component } from 'react'
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
  left: ${(props)=> props.type == 'SELECT' ? '0px' : '-100%'};
  transition-duration: 0.6s; 
`
const SearchInput = styled.input`
  width: calc(50% - 12px);
  font-size: 2rem;
  padding: 6px;
  outline: none;
  border: none;
  display: inline-block;
  border-radius: 10px;
  background-color: #dcdde1;
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
  background-color: #dcdde1;
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
export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputType: 'SELECT'
    }
  }
  change = ()=>{
    if(this.state.inputType === 'SELECT'){
      this.setState({inputType: 'SEARCH'})
    }else{
      this.setState({inputType: 'SELECT'})
    }
  }
  render(){
    return(
      <Container>
        <InputContainer>
          <Input type={this.state.inputType}>
            <CategoryInput>
              <option>Q&A</option>
            </CategoryInput>
            <SearchInput/>
          </Input>
        </InputContainer>
        <ButtonContainer>
          <ModeButton onClick={this.change} style={{textAlign : 'center'}}>
            <i className="material-icons">cached</i>
          </ModeButton>
        </ButtonContainer>
      </Container>
    )
  }
}
