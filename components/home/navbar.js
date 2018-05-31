import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  position: fixed;
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
`
const MenuButton = styled.span`
  text-align: center;
  padding: 10px;
  font-family: 'Kanit';
  font-size: 1.8rem;
`
export default ()=>(
  <Container>
    <Topic>
      <span>Mook</span>
    </Topic>
    <Menu>
      <MenuButton>Create</MenuButton>
      <MenuButton>Sign Up</MenuButton>
      <MenuButton>Login</MenuButton>
    </Menu>
  </Container>
)