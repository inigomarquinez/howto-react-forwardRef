import React from "react";

class TestComponent extends React.Component {
  testComponentFn = () => {
    alert("HELLO! This is a inner function of TestComponent");
  };

  render() {
    const { classes, counter } = this.props;
    return (
      <div>
        <label className={classes.label}>Counter:</label>
        <input type="number" value={counter} readOnly />
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <TestComponent ref={props.forwardedRef} {...props} />
));
