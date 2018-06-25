import React, {Component} from 'react'
import Head  from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Topic from '../components/mook/topic'
import MookField from '../components/mook/mookField'
import Review from '../components/mook/review'
import Page from '../components/page.js'
import { connect } from 'react-redux'
import TokenLogin from '../api/TokenLogin'
import { LOGIN } from '../redux/action/action'
import DeleteButton from '../components/mook/deleteButton'
import Autor from '../components/mook/autor'
import $ from 'jquery'
class page extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      tag: [],
      text: '',
    }
  }
  componentDidMount(){
    TokenLogin(this)
    var url = new URL(window.location.href);
    const name = url.searchParams.get('name');
    if(name === null) window.location = "https://localhost:3000/"
    const id = url.searchParams.get('id')
    const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if(!checkForHexRegExp.test(id)){
      window.location = "https://localhost:3000/"
      return
    }
    $.post('https://localhost:3000/get-mook',{name,_id:id},(res)=>{
      if(res ===''){
        window.location = "https://localhost:3000/"
        return
      }
      this.setState({
        name: res.name,
        tag: res.tag,
        text: res.text,
        autorId: res.userId,
        id: res._id,
      })
      $.post('https://localhost:3000/get-user',{id: res.userId},(res)=>{
        this.setState({
          autor: {name: res.name, picture: res.picture}
        })
      })
    })
  }
  render(){
    return(
      <div>
        <Head>
          <title>Mook</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet'/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <style global jsx>
          {`
            body {
              margin: 0px;
              padding: 0px;
              overflow-x: hidden;
              width: 100vw;
              height: 100vh;
            }
            html {
              font-size: 62.5%;
            }
          `}
        </style>
        <body>
          <Navbar/>
          <Topic name={this.state.name}/>
          <MookField text={this.state.text}/>
          <Autor {...this.state.autor}/>
          <DeleteButton isMyMook={this.props.profile.data ? this.props.profile.data.id === this.state.autorId : false} mookId={this.state.id}/>
          <Review/>
        </body>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    profile: state.appReducer,
    mook: state.formReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login : (payload) => dispatch(LOGIN(payload)),
  }
}
export default Page(connect(mapStateToProps, mapDispatchToProps)(page));
