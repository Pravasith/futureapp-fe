import { combineReducers } from 'redux'
import introText from './introText'
import introActiveText from './introTextActive'
import { userDetailReducer } from './userDetailReducer'
import circles from './circlesReducer'
import userStatusLevelText from './reducerBarryBubbleText'
import theSlideData from './ideaReducer'
import overAllData from './imageArrayReducer'
import businessTypes from './appDataReducer'
import {updateProjectType} from './cardDataReducer'

const allReducers = combineReducers({
    introText,
    activeText: introActiveText,
    userDetails: userDetailReducer,
    circles,
    userStatusLevelText,
    theSlideData,
    overAllData,
    businessTypes,
    updateProjectType

})

export default allReducers