const defaultState = {
    login: false
};
  
const reducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          login: true
        }
      default:
        return state;
    }
};
  
const store = Redux.createStore(reducer);
  
const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

console.log(store.getState()); //false