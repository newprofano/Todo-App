const INITIAL_STATE = {
  description: '',
  list: []
};

export default (state = INITIAL_STATE, action) => {
  //esse type e payload vem lá do action
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };

    case 'TODO_SEARCHED':
      return { ...state, list: action.payload };

    case 'TODO_CLEAR':
      return { ...state, description: '' };

    default:
      return state;
  }
};
