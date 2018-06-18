import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import appReducer from '../redux/reducer/reducer'
import formReducer from '../redux/reducer/form'
const rootReducer = combineReducers({
  appReducer,
  formReducer
})
const store = createStore(rootReducer)
const page = (Page) => {
    return(
        class PageWrapper extends React.Component{
            render(){
                return(
                    <Provider store={store}>
                      <Page {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}
export default page;
