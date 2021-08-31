import './App.css';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar.jsx';
import Profile from './components/profile/profile.jsx';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header/>
        <div className="content-wrapper">
          <SideBar/>
          <Route path='/profile' 
            render={ ()=><Profile/> }/>
          <Route path='/dialogs' 
                 render={ ()=><DialogsContainer/> }/>
          <Route path='/news' render={ ()=><News/> }/>
          <Route path='/music' render={ ()=><Music/> }/>
          <Route path='/settings' render={ ()=><Settings/> }/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
