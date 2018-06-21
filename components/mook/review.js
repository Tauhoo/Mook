import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  transform: translateX(-50%);
  margin-left: 50%;
  margin-top: 20px;
  width: 1100px;
`

class page extends Component {
  componentDidMount(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.0&appId=2106226559621691&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
  }
  render(){
    return(
      <Container>
        <div id="fb-root"></div>
        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="1100" data-numposts="5"></div>
      </Container>
    )
  }
}

export default page
