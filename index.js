import { createStore, combineReducers } from "redux";

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

function incrementCounterByAmount(amount = 1) {
  return {
    type: "INCREMENT_COUNTER_BY_AMOUNT",
    payload: amount,
  };
}

function incrementNumber() {
  return {
    type: "INCREMENT_NUMBER",
  };
}

const initialCounterState = {
  counter: 0,
};

const initialNumberState = {
  number: 0,
};

// reducer
const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER": {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    default:
      return state;
  }
};

const counterReducer = (state = initialCounterState, action) => {
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
    case "INCREMENT_COUNTER_BY_AMOUNT": {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  counter: counterReducer,
  number: numberReducer,
});

const store = createStore(rootReducers);
console.log(store.getState());

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
console.log(store.getState());

store.dispatch(decrementCounter());
console.log(store.getState());

store.dispatch(incrementCounterByAmount(7));
console.log(store.getState());

store.dispatch(incrementNumber());
console.log(store.getState());
