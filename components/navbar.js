import React, {Component} from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'
const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #f1c40f;
`
const Menu = styled.div`
  display: ${(props) => props.display ? 'inline-block' : 'none'};
  float: right;
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
const MenuButton = styled.button`
  text-align: center;
  margin: 10px;
  font-family: 'Kanit';
  font-size: 1.8rem;
  color: #2d3436;
  border: none;
  background-color: #f1c40f;
`
const Text = styled.span`
  text-align: center;
  padding: 10px;
  font-family: 'Kanit';
  font-size: 1.8rem;
  color: #2d3436;
`
const Picture = styled.div`
  background: url('${props=>props.url}');
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  width: 52px;
  height: 52px;
  display: ${(props) => props.display ? 'inline-block' : 'none'};
  float: right;
`
class page extends Component {
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(){
    localStorage.removeItem('MookUserToken')
    this.props.logout()
    this.setState(nullProfile)
  }

  render(){
    return (
      <Container>
        <Topic>
          <span><Link href={'/'}>Mook</Link></span>
        </Topic>
        <Picture url={this.props.isOnline ? this.props.data.picture.data.url : ""} display={this.props.isOnline}/>
        <Menu display={this.props.isOnline}>
          <MenuButton><Link href={'/form'}><a>Create</a></Link></MenuButton>
          <MenuButton onClick={this.logout}>Logout</MenuButton>
          <Text>{this.props.isOnline ? this.props.data.name : ""}</Text>
        </Menu>
        <Menu display={!this.props.isOnline}>
          <MenuButton><Link
          href={'https://www.facebook.com/v3.0/dialog/oauth?client_id=2106226559621691&redirect_uri=https://localhost:3000/'}>
            <a>Login</a>
          </Link>
          </MenuButton>
        </Menu>
      </Container>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    isOnline: state.online,
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout : () => dispatch({ type: 'LOGOUT' }),
    login : () => dispatch({ type: 'LOGIN' }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(page)
