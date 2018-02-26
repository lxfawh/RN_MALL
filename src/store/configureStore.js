import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'
// import http from '../middleware/http'

const middelwares = []

// middelwares.push(http)
middelwares.push(thunkMiddleware)

// if (process.env.NODE_ENV === 'development') {
//     middelwares.push(createLogger())
// }

const createStoreWithMiddleware = applyMiddleware(...middelwares)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store
}
