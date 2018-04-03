import { combineReducers } from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import userDetailReducer from './userDetailReducer'
import circles from './circlesReducer'
import businessTypes from './journeyReducers'
import userStatusLevelText from './reducerBarryBubbleText'
import theSlideData from './ideaReducer'
import overAllData from './imageArrayReducer'
// import businesses from './journeyReducers'


const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles,
    userStatusLevelText,
    theSlideData,
    overAllData,
    businessTypes
})

export default allReducers