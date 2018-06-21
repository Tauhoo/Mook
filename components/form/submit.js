import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {INPUT} from '../../redux/action/action'
import Page from '../page'
import $ from 'jquery'
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
  addMook = (data) => {
    $.post('https://localhost:3000/add-mook',{mook: data},(data)=>{
      window.location = "https://localhost:3000/mook?name="+data.name+'&id='+data._id
    })
  }

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
    const data = {...this.props, token: localStorage.getItem('MookUserToken')}
    delete data.dispatch
    console.log(data);
    if(data.name === '') return this.mistake('NAME BLANK')

    if(data.tag.find(i => i !== 'none') ===  undefined) return this.mistake('TAG ALL NONE')

    if(data.text === '') return this.mistake('TEXT BLANK')

    this.addMook(data)

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
