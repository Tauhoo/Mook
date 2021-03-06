import styled from 'styled-components'
import React, {Component} from 'react'
import TagChild from './tagChild'
const Container = styled.div`
    width: calc(80vw + 20px);
    margin-top: 10px;
    margin-left: calc(10vw - 10px);
`
const Topic = styled.div`
  width: 80vw;
`
const Text = styled.span`
  font-size: 3rem;
  font-family: 'Kanit';
  color: #2d3436;
`
const TagGroup =styled.div`
  width: 100%;
  margin-top: 5px;
`
class tag extends Component {
  render(){
    return (
      <Container>
        <Topic><Text>Tag</Text></Topic>
        <TagGroup>
          <TagChild index={0}/>
          <TagChild index={1}/>
          <TagChild index={2}/>
          <TagChild index={3}/>
        </TagGroup>
      </Container>
    )
  }
}

export default tag
