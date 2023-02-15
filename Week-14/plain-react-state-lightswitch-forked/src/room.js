import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./index.css";

class Room extends React.Component {
  flipLight = () => {
    const { light, dispatch } = this.props;
    console.log(light, "cat");
    dispatch({
      type: light === "lit" ? "lit" : "dark"
    });
  };

  render() {
    const { light } = this.props;
    return (
      <div className={`room ${light}`}>
        the room is {light}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { light: state };
};

export default connect(mapStateToProps)(Room);
