import React, { Component } from "react";

// error handling in React
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

    // this is a static component which allows log errors
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBoundary;
