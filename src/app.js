import {combineReducers} from 'redux'

const dummyReducer = (state, action) => state
const reducers = combineReducers([dummyReducer])

reducers({}, {type: 'HI'})
