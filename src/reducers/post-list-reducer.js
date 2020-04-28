
export default (state = {}, action) => {

  const { title, postDate, userName, text, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, { 
      [id]: {
        title: title,
        postDate: postDate,
        userName: userName,
        text: text,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

