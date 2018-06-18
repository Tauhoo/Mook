import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {INPUT} from '../../redux/action/action'
import Page from '../page'

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
  background-color: #dcdde1;
`

class name extends Component {
  input = (e) => {
    console.log(this.props);
    this.props.update({text: e.target.value})
  }
  render(){
   return (
     <Container>
       <Input placeholder='ชื่อมุข' onChange={this.input}/>
     </Container>
   )
 }
}
const mapStateToProps = state => state.formReducer
const mapDispatchToProps = dispatch => ({
  update: data => dispatch(INPUT('NAME',data))
})
export default Page(connect(mapStateToProps, mapDispatchToProps)(name))
