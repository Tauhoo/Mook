import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import app from '../redux/reducer/reducer'
const store = createStore(app)
const page = (Page) => {
    return(
        class PageWrapper extends React.Component{
            render(){
                return(
                    <Provider store={store}>
                      <Page />
                    </Provider>
                )
            }
        }
    )
}
export default page;
