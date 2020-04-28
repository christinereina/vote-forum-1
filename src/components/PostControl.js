import React from 'react';
import NewFormSubmit from './Form/NewFormSubmit';
import Post from './Post.js';
import { connect } from 'react-redux';

class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, postDate, userName, text } = newPost;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      title: title,
      postDate: postDate,
      userName: userName,
      text: text
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }
  
  //end below
}

PostControl = connect()(PostControl);
export default PostControl;