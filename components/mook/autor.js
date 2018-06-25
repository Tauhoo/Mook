import styled from 'styled-components'
const Container = styled.div`
  margin-top: 10px;
  margin-left: calc(10vw - 10px);
`
const Picture = styled.div`
  height: 52px;
  width: 52px;
  background-color: black;
  background: url("${(props)=>props.url}");
  background-size: cover;
  display: inline-block;
  border-radius: 50%;
`
const Name = styled.div`
  display: inline-block;
  overflow: hidden;
  padding: 12px;
  vertical-align:top;
`
const Text = styled.span`
  font-family: 'Kanit';
  font-size: 1.8rem;
  color: #2d3436;
  margin: 0px;
`
export default (props)=>(
  <Container>
    <Picture url={props.picture ? props.picture.data.url : ''}/>
    <Name>
      <Text>{props.name}</Text>
    </Name>
  </Container>
)

//<Text>{props.name}</Text>
