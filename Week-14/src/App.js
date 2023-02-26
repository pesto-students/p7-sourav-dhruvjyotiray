import "./App.css";
import StepCounter from "./components/step-counter/step-counter.component.jsx";
import { legacy_createStore as createStore } from "redux";

const stepCountReducer = (currentState = 0, action) => {
  switch (action.type) {
    case "ADD_STEP": {
      return currentState + 1;
    }
    case "RESET": {
      return 0;
    }
    default:
      return currentState;
  }
};

export function App() {
  return (
    <div className="App">
      <div className="body">
        <StepCounter />
      </div>
    </div>
  );
}

export const store = createStore(stepCountReducer);
