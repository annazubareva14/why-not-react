let store = {
    _state: {
        profilePage: {
            postsData: [
                {message: 'Hey', id: 1, likesCount: 23},
                {message: 'I am here', id: 2, likesCount: 3},
                {message: 'jupp', id: 3, likesCount: 10},
                {message: 'Hey', id: 4, likesCount: 23},
                {message: 'I am here', id: 5, likesCount: 3}
            ],
            newPostText: ''       
        },
    
        messagesPage: {
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
            newMessageText: 'now me'
        }    
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; 
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText
        };
    
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.messagesPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}


export default store;
window.store = store;