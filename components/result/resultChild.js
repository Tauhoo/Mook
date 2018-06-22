import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: calc(100vw/3 - 40px);
  height: 205px;
  background-color: #fff;
  display: inline-block;
  margin: 10px;
  @media (max-width: 700px) {
    width: calc(100vw - 40px);
    height: 205px;
    display: block;
  }
  padding: 10px;
`
const Name = styled.div`
  width: calc(100% - 15px);
  padding: 0px 0px 0px 15px;
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #2d3436;
  border-width: 0px 0px 2px 0px;
  border-color: #ecf0f1 #ecf0f1 #2d3436 #ecf0f1;
  border-style: solid;
`
const ReviewContainer = styled.div`
  display: flex;
  width: calc(100% - 20px);
  padding: 10px;
`
const Like = styled.div`
  flex: 1;
  color: #2d3436;
`
const LinkeNumber = styled.span`
  font-size: 2rem;
  font-family: 'Kanit';
  display: inline-block;
`
const LikeIcon = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 5px;
`
const Comment = styled.div`
  flex: 1;
  color: #2d3436;
`
const CommentNumber = styled.span`
  font-size: 2rem;
  font-family: 'Kanit';
  display: inline-block;
`
const CommentIcon = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 5px;
`
const Category = styled.div`
  padding: 10px;
`
const TopicCategory = styled.div`
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #2d3436;
`
const TagGroup = styled.div`
  margin-top: 5px;
`
const Tag = styled.span`
  display: inline-block;
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 12px;
  font-size: 1.2rem;
  font-family: 'Kanit';
  padding: 0px 10px 3px 10px;
  margin: 0px 5px 5px 0px;
`
class result extends Component{
  goto = () =>{
    window.location = "https://localhost:3000/mook?name="+this.props.name+'&id='+this.props._id
  }
  render(){
    var tag = []
    for( var i of this.props.tag )
      if(i !== 'none') tag.push(<Tag>{i}</Tag>)

    return (
      <Container onClick={this.goto}>
        <Name><span>{this.props.name}</span></Name>
        <ReviewContainer>
        </ReviewContainer>
        <Category>
          <TopicCategory>Category</TopicCategory>
          <TagGroup>
            {tag}
          </TagGroup>
        </Category>
      </Container>
    )
  }
}

export default result
