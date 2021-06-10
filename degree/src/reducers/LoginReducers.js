import {ACTION_TYPES} from '../const'

const initialState = {
    user: null,
    token: null,
    errors: '',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ACTION_TYPES.SIGN_IN_START: {
            return {
                ...state,
            }
        }

        case ACTION_TYPES.SIGN_IN_SUCCESS: {
            return {
                ...state,
                ...initialState,
                user: action.payload,
                token: action.payload.token
            }
        }

        case ACTION_TYPES.SIGN_IN_FAILURE: {
            return {
                ...state
            }
        }

        case ACTION_TYPES.SIGN_OUT: {
            return initialState
        }
        
        default: return state
    } 
}