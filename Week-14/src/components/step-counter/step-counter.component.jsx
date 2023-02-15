import { connect } from "react-redux";
import { mapDispatchToProps } from "../action/actions";
import "./step-counter.styles.css"

const StepCounter = (props) => {
  const { steps, dispatch } = props;

  const addSteps = () => {
    return dispatch({ type: "ADD_STEP" });
  };
  const reset = () => {
    return dispatch({ type: "RESET" });
  };

  return (
    <div className="main-body">
      <h1>You've walked {steps} steps today!</h1>
      <button onClick={addSteps}>Add a steps</button>
      <button onClick={reset}>Reset steps</button>
    </div>
  );
};

export default connect(mapDispatchToProps)(StepCounter);
