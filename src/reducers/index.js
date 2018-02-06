import {combineReducers} from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import userDetailReducer from './userDetailReducer'
import circles from './circlesReducer'


const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles
})

export default allReducers