const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {name: 'Dima', id: 1},
        {name: 'Andrew', id: 2},
        {name: 'Mary', id: 3}
    ],
    messagesData: [
        {message: 'Hi', id: 1},
        {message: 'How are you?', id: 2},
        {message: 'o', id: 3}
    ],
    newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {message: body, id: 4}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default messagesReducer;