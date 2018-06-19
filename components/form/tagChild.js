import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {INPUT} from '../../redux/action/action'
import Page from '../page'
const Container = styled.select`
  padding: 3px;
  margin: 3px;
  font-family: 'Kanit';
  border-width: 0px;
  border-radius: 10px;
  width: calc(100%/4 - 6px);
  color: #2d3436;
  outline: none;
`
class tag extends Component {
  componentDidMount(){
    this.props.update({text: 'none', index: this.props.index})
  }
  input = (e) => {
    this.props.update({text: e.target.value, index: this.props.index})
  }
  render(){
    return (
      <Container onChange={this.input}>
        <option>none</option>
        <option>มุกถามตอบ</option>
        <option>มุกจีบสาว</option>
        <option>มุกเล่าเรื่อง</option>
        <option>18+</option>
      </Container>
    )
  }
}

const mapStateToProps = state => state.formReducer
const mapDispatchToProps = dispatch => ({
  update: taglist => dispatch(INPUT('TAG',taglist))
})
export default Page(connect(mapStateToProps, mapDispatchToProps)(tag))
