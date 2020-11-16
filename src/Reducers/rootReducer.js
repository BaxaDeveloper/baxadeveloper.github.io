import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import system from './system'

export default history => combineReducers({
    router: connectRouter(history),
    system
})