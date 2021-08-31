import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesPage-reducer';
import StoreContext from '../../storeContext';
import Dialogs from './dialogs';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
               let state = store.getState().messagesPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }; 
                return <Dialogs
                updateNewMessageBody={onMessageChange}
                sendMessage={onSendMessageClick}
                messagesPage={state}
                />
        }}
        </StoreContext.Consumer>
        
    );
}

export default DialogsContainer;