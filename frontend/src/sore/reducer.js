import {
    GET_MESSAGES_SUCCESS,

    SEND_MESSAGE_SUCCESS
} from "./actions";

const initialState = {
    messages:[],
    error: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                error: ''
            };

        default:
            return state;
    }
};

export default messagesReducer;