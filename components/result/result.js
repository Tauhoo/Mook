import React, {Component} from 'react'
import styled from 'styled-components'
import ResultChild from './resultChild'
const Container = styled.div`
  overflow: hidden;
  width: 100vw;
`
class page extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.result);
    var ResultChilds = [];
    for(var i of this.props.result){
      console.log(i);
      ResultChilds.push(<ResultChild {...i}/>)
    }
    return(
      <Container>{ResultChilds}</Container>
    )
  }
}

export default page
