const reducer = (state = [], action) => {
  
  switch(action.type) {
    case 'split_string': 
      return action.payload.split('');
    case 'add_character':
      // make sure state are immutable
      // return completely new object for each action
			return [...state, action.payload]
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState()

const action = { 
  type: 'split_string', 
  payload: 'asdf' 
}

store.dispatch(action);
store.getState();

const action2 = {
	type: 'add_character',
  payload: 'a'
}

store.dispatch(action2);
store.getState();