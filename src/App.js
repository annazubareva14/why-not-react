import './App.css';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header/>
        <div className="content-wrapper">
          <SideBar/>
          <Route path='/profile' 
            render={ ()=><Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch} 
            /> 
            }/>
          <Route path='/dialogs' 
                 render={ ()=><Dialogs 
                 state={props.state.messagesPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}
            /> 
            }/>
          <Route path='/news' render={ ()=><News/> }/>
          <Route path='/music' render={ ()=><Music/> }/>
          <Route path='/settings' render={ ()=><Settings/> }/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
