import { combineReducers } from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import { userDetailReducer } from './userDetailReducer'
import circles from './circlesReducer'
import userStatusLevelText from './reducerBarryBubbleText'
import theSlideData from './ideaReducer'
import overAllData from './imageArrayReducer'
import businessTypes from './appDataReducer'
import { updateProjectType, updatedCardData } from './cardDataReducer'
import { createUser } from './userDetailReducer'

const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles,
    userStatusLevelText,
    theSlideData,
    overAllData,
    businessTypes,
    updateProjectType,
    updatedCardData,
    createUser

})

export default allReducers