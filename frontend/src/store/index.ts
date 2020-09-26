import { combineReducers, createStore } from 'redux'


import screenReducer from './screen/index'

const rootReducer = combineReducers({
    screen: screenReducer
})

const store = createStore(rootReducer)

export default store