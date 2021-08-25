import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './DialogItem/dialogsItem';
import Message from './Message/message';

function Dialogs(props) {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem  name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        props.updateNewMessageText('');
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                <textarea ref={newMessageElement} 
                          className={s.inputMessage}
                          onChange={onMessageChange}
                          value={props.newMessageText}
                          />
                <button onClick={ addMessage } className={s.inputBtn}>Add Message</button>
            </div>
            
        </div>
        
    );
}

export default Dialogs;