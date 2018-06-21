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
  display: inline-block;
  border-radius: 10px;
  background-color: #dcdde1;
  font-family: 'Kanit';
  border: none;

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
      inputType: 'SELECT',
      searchKeyWord: ''
    }
  }
  change = () =>{
    if(this.state.inputType === 'SELECT'){
      this.setState({inputType: 'SEARCH'})
    }else{
      this.setState({inputType: 'SELECT'})
    }
  }
  changeCategory = (e) =>{
    window.location = "https://localhost:3000/result?keyword="+e.target.value+"&type=TAG"
  }
  typeSearch = (e) =>{
    this.setState({searchKeyWord: e.target.value})
  }
  searchInput = (e) =>{
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      window.location = "https://localhost:3000/result?keyword="+this.state.searchKeyWord+"&type=NAME"
      return false;
    }
  }
  render(){
    return(
      <Container>
        <InputContainer>
          <Input type={this.state.inputType} onKeyPress={this.searchInput} onChange={this.typeSearch}>
            <CategoryInput onChange={this.changeCategory}>
              <option>none</option>
              <option>มุกถามตอบ</option>
              <option>มุกจีบสาว</option>
              <option>มุกเล่าเรื่อง</option>
              <option>18+</option>
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
