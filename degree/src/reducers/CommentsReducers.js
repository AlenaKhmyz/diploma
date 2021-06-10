import { ACTION_TYPES} from '../const'

const initialState = {
    comments: [],
    form: {
        name: '',
        comment: ''
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_USER_COMMENT: 
            return { 
                ...state,
                
        } 

        default: return state;
    }
}