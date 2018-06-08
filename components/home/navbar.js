import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
`
const Menu = styled.div`
  display: inline-block;
  float: right;
  padding-top: 10px;
  margin-right: 20px;
`
const Topic = styled.div`
  display: inline-block;
  padding: 10px;
  font-family: 'Kanit';
  font-size: 1.8rem;
  text-align: center;
  margin-left: 20px;
  color: #2d3436;
`
const MenuButton = styled.span`
  text-align: center;
  padding: 10px;
  font-family: 'Kanit';
  font-size: 1.8rem;
  color: #2d3436;
`
export default ()=>(
  <Container>
    <Topic>
      <span>Mook</span>
    </Topic>
    <Menu>
      <MenuButton>Create</MenuButton>
      <MenuButton><a
      href={'https://www.facebook.com/v3.0/dialog/oauth?client_id=2106226559621691&redirect_uri=https://localhost:3000/&state={"{st=state123abc,ds=123456789}"}'}>
      Login</a>
      </MenuButton>
    </Menu>
  </Container>
)
