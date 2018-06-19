import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {INPUT} from '../../redux/action/action'
import Page from '../page'
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
class page extends Component{
  
  mistake = (err) => {
    switch(err){
      case 'NAME BLANK':
        alert("Name isn't filled.")
        break;
      case 'TAG ALL NONE':
        alert('A mook must have at least a tag.')
        break;
      case 'TEXT BLANK':
        alert("Your mook isn't filled.")
        break;
    }
  }
  submit = () => {
    const data = {...this.props}
    delete data.dispatch

    if(data.name === ''){
      this.mistake('NAME BLANK')
    }

    if(data.tag.find(i => i !== 'none') ===  undefined){
      this.mistake('TAG ALL NONE')
    }

    if(data.text === ''){
      this.mistake('TEXT BLANK')
    }

  }

  render(){
    return (
      <Container>
        <Button onClick={this.submit}>Publish</Button>
      </Container>
    )
  }
}
const mapStateToProps = state => state.formReducer
export default Page(connect(mapStateToProps)(page))
