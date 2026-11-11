import { createStore } from "redux";

// action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}

function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER",
  };
}

function incrementCounterByAmount(amount) {
    return {
        type:"INCREMENT_COUNTER_BY_AMOUNT",
        payload:amount
    }
}

const initialState = {
  counter: 0,
  number: 5,
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "DECREMENT_COUNTER": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "INCREMENT_COUNTER_BY_AMOUNT":{
        return {
            ...state,
            counter:state.counter + action.payload
        }
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);
console.log(store.getState());

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
console.log(store.getState());

store.dispatch(decrementCounter());
console.log(store.getState());

store.dispatch(incrementCounterByAmount(7));
console.log(store.getState());
