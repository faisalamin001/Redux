import { combineReducers } from "redux";
let counterState = 10;

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let initialState = {
  name: ["oldValue"],
};
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addName":
      return {
        name: [...state.name, action.payload],
      };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  counter: counterReducer,
  name: nameReducer,
});

export default allReducers;
