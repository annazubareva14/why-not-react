import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/dialogsItem';
import Message from './Message/message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesPage-reducer';

function Dialogs(props) {
    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem  name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.messages}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.sendMessage}>
                <textarea className={s.inputMessage}
                          onChange={onMessageChange}
                          value={newMessageBody}
                          placeholder='Enter your message'
                          />
                <button onClick={ onSendMessageClick } className={s.inputBtn}>Add Message</button>
            </div>
            
        </div>
        
    );
}

export default Dialogs;