const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({message: body, id: 4});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});


export default messagesReducer;