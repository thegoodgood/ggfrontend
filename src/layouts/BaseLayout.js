import React, { Component, PropTypes } from "react";
import Nav from "../components/Nav";

class BaseLayout extends Component {
  render() {
    return <div>MY COMPONENT</div>;
  }
}

// PropTypes ensure that the right type of props is passed to a component — and, conversely, that the receiving component is receiving the right type of props.
// BaseLayout.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default BaseLayout;
