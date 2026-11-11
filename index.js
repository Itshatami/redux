// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");

const logger = createLogger();

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

const store = createStore(rootReducers, applyMiddleware(logger));
console.log(store.getState());

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByAmount(7));
store.dispatch(incrementNumber());
