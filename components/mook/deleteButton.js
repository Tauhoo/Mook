import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import $ from 'jquery'
import Page from '../page'
const Container = styled.div`
  display: ${(props)=>props.display};
  margin-left: calc(10vw - 10px);
  margin-top: 10px;
  outline: none;
`
const DeleteButton = styled.button`
  border-width: 0px;
  border-radius: 5px;
  background-color: #e74c3c;
  font-size: 1.5rem;
  font-family: 'Kanit';
  color: white;
  outline: none;
  &:hover {
    background-color: #c0392b;
  }
`

class page extends Component {
  constructor(props){
    super(props)
  }
  remove = () =>{
    if(!this.props.isMyMook) return
    $.post('https://localhost:3000/remove-mook',{_id:this.props.mookId},(res)=>{
      window.location = "https://localhost:3000/"
    })
  }

  render(){
    return(
      <Container display={this.props.isOnline ? 'block' : 'none'}>
        <DeleteButton onClick={this.remove}>Delete</DeleteButton>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    isOnline: state.appReducer.online,
    data: state.appReducer.data
  }
}

export default connect(mapStateToProps)(page)
