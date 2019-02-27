import { connect } from "react-redux";
import { compose, mapProps, withHandlers, withState } from "recompose";
import { withStyles } from "@material-ui/core/styles";

import TestComponent from "./TestComponent";
import styles from "./styles.css.js";

const ReduxEnhacer = connect(
  null,
  null
);

export default compose(
  ReduxEnhacer,
  withState("counter", "setCounter", 0),
  // Be careful when using mapProps, because we need to propagate forwardedRef prop
  mapProps(({ setCounter, ...rest }) => {
    let { counter } = rest;
    return {
      increment: () => setCounter(counter + 1),
      decrement: () => setCounter(counter - 1),
      ...rest
    };
  }),
  withHandlers({
    testHOCFn: () => () => {
      alert("HELLO! This is a inner function of a HOC");
    }
  }),
  withStyles(styles)
)(TestComponent);
