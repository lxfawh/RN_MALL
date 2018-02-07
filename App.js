import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AppWithNavigationState from './src/router/routes'
import reducer from './src/reducers/test'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.store = store
    }
    render() {
        return (<Provider store={store}><AppWithNavigationState /></Provider>)
    }
}

