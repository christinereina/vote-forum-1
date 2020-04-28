import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
  return (
    <React.Fragment>
    <hr/>
    {Object.values(props.postList).map((post) =>
    <Post
    whenPostClicked = { props.onPostSelection }
    title={post.title}
    postDate={post.postDate}
    userName={post.userName}
    text={post.text}
    id={post.id}
    key={post.id}/>
  )}
  </React.Fragment>
  );
}

PostList.propTypes = {
  proplist: PropTypes.object,
  onPostSelection: PropTypes.function
};

export default PostList;