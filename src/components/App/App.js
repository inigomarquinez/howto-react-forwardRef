import React from "react";
import TestComponentHOC from "../TestComponent";

const ref = React.createRef();

class App extends React.Component {
  handleIncrement = () => {
    if (ref) {
      ref.current.props.increment();
    }
  };

  handleDecrement = () => {
    if (ref) {
      ref.current.props.decrement();
    }
  };

  handleComponentFn = () => {
    if (ref) {
      ref.current.testComponentFn();
    }
  };

  handleHOCFn = () => {
    if (ref) {
      ref.current.props.testHOCFn();
    }
  };

  render() {
    return (
      <React.Fragment>
        <TestComponentHOC forwardedRef={ref} />
        <br />
        <button style={{margin: '5px'}} onClick={this.handleIncrement}>Increment</button>
        <button style={{margin: '5px'}} onClick={this.handleDecrement}>Decrement</button>
        <button style={{margin: '5px'}} onClick={this.handleComponentFn}>Call testComponentFn</button>
        <button style={{margin: '5px'}} onClick={this.handleHOCFn}>Call testHOCFn</button>
      </React.Fragment>
    );
  }
}

export default App;
