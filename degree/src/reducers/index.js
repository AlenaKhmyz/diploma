import { combineReducers } from 'redux';

import CommentsReducers from './CommentsReducers'
import LoginReducers from './LoginReducers' 

export default combineReducers({
    comments: CommentsReducers,
    login: LoginReducers,

})