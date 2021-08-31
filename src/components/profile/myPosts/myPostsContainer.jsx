import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilePage-reducer'
import StoreContext from '../../../storeContext';
import MyPosts from './myPosts';



const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return <MyPosts updateNewPostText={onPostChange} 
        addPost={addPost} 
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
      />
}}
    </StoreContext.Consumer>
    
  );
}

export default MyPostsContainer;
