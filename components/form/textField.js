import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {INPUT} from '../../redux/action/action'
import Page from '../page'
const TextField = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border-width: 0px;
  font-family: 'Kanit';
  background-color: #dcdde1;
  resize: vertical;
  height: 30vh;
  color: #2d3436;
  @media (max-width: 700px) {
    height: 38vh;
  }
  font-size: 3rem;
  font-family: 'Kanit';
  color: #2d3436;
`
const Container = styled.div`
  width: calc(80vw + 20px);
  margin-top: 20px;
  margin-left: 50vw;
  transform: translateX(-50%);
`
class text extends Component{
  input = (e) => {
    this.props.update({text: e.target.value})
    console.log(this.props)
  }
  render(){
    return (
      <Container>
        <TextField onChange={this.input} placeholder='เขียนมุขลงในนี้'>
        </TextField>
      </Container>
    )
  }
}
const mapStateToProps = state => state.formReducer
const mapDispatchToProps = dispatch => ({
  update: data => dispatch(INPUT('TEXT',data))
})
export default Page(connect(mapStateToProps, mapDispatchToProps)(text))
