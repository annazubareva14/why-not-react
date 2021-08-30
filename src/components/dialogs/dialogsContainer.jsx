import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesPage-reducer';
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs
        updateNewMessageBody={onMessageChange}
        sendMessage={onSendMessageClick}
        messagesPage={state}
        />
    );
}

export default DialogsContainer;