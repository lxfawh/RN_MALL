import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AppWithNavigationState from './src/router/router'
import reducer from './src/reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

