import {combineReducers} from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import userDetailReducer from './userDetailReducer'
import circles from './circlesReducer'
import userStatusLevelText from './reducerBarryBubbleText'
import theIdeaNSlide from './ideaReducer'


const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles,
    userStatusLevelText,
    theIdeaNSlide
})

export default allReducers