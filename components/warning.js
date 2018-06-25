import React, {Component} from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: fixed;
`
const Text = styled.span`
  font-size: 1.5rem;
  font-family: 'Kanit';
`
class page extends Component {
  render(){
    return (
      <Container>
        <Text>{this.props.text}</Text>
      </Container>
    )
  }
}

export default page
