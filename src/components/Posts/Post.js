import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>
        {new Intl.DateTimeFormat('en-GB', {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(props.postDate)}
      </p>
      <p>{props.userName}</p>
      <p>{props.text}</p>
      <p></p>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  postDate: PropTypes.any, 
  userName: PropTypes.string,
  text: PropTypes.string
}

export default Post;