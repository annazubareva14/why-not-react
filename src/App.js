import './App.css';
import Header from './components/header/header.jsx';
import SideBar from './components/sideBar/sideBar.jsx';
import Profile from './components/profile/profile.jsx';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';


function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <div className="content-wrapper">
        <SideBar />
        <Route path='/profile'
          render={() => <Profile />} />
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/users' 
          render={() => <UsersContainer/>} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
