import { createStore } from "redux";

const initialState = "lit";

export const switchReducer = (currentState = initialState, action) => {
  console.log(action, "hehe");
  switch (action.type) {
    case "lit": {
      return "dark";
    }
    case "dark": {
      return "lit";
    }
    default:
      return currentState;
  }
};

export const store = createStore(switchReducer);
