import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  let action
  const currentState = {
    1: {
      title: 'Thoughts about Beef',
      postDate: '04-20-2020',
      userName: 'BigSmoke',
      text: 'Oh, shit son',
      id: 1 }, 

    2: {
      title: 'Thoughts about Beef',
      postDate: '04-20-2020',
      userName: 'BigSmoke',
      text: 'Oh, shit son',
      id: 2 } 
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
  
})
