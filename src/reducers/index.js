import {combineReducers} from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'


const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
})

export default allReducers