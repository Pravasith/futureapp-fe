import { combineReducers } from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import userDetailReducer from './userDetailReducer'
import circles from './circlesReducer'
import userStatusLevelText from './reducerBarryBubbleText'
import theSlideData from './ideaReducer'
import overAllData from './imageArrayReducer'


const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles,
    userStatusLevelText,
    theSlideData,
    overAllData
})

export default allReducers