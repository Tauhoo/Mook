import styled from 'styled-components'
const Container = styled.div`
  margin-top: 30px;
  margin-left: calc(10vw - 10px);
`
const Like = styled.div`
  display: inline-block;
`
const Share = styled.div`
  display: inline-block;
  float: right;
`
const LikeNumber = styled.span`
  font-family: 'Kanit';
  font-size: 1.5rem;
  display: inline-block;
  color: #2d3436;
`
const LikeIcon = styled.div`
  height: 100%;
  display: inline-block;
  margin-left: 6px;
  color: #2d3436;
`
export default ()=>(
    <Container>
      <Like>
        <LikeNumber>10000</LikeNumber>
        <LikeIcon>
          <span style={{position: 'relative', top: '15px', transform: 'translateY(-50%)'}}class="material-icons">
            thumb_up
          </span>
        </LikeIcon>
      </Like>
      <Share/>
    </Container>
)
