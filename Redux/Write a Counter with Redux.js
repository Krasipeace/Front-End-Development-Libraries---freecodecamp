const INCREMENT = 1;
const DECREMENT = -1;

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const incAction = () => {
    return {
        type: INCREMENT
    }
};

const decAction = () => {
    return {
        type: DECREMENT
    }
};

const store = Redux.createStore(counterReducer);

console.log(store.getState()); // 0
store.dispatch(incAction());
console.log(store.getState()); // 1
store.dispatch(decAction());
console.log(store.getState()); // 0