import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from '/ReusableForm'


function NewFormSubmit(props){

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: event.target.title.value, postDate: event.target.postDate.value, userName: event.target.issue.value, text: event.target.text.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewFormSubmission}
        buttonText="POST" />
    </React.Fragment>
  );
}

NewFormSubmit.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;