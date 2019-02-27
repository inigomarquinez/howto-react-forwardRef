import { createStore } from "redux";

// ACTIONS /////////////////////////////////////////////////////////////////////////////////////////

const TEST_ACTION = "TEST_ACTION";

const testAction = {
  type: TEST_ACTION,
  text: "Test action"
};

// REDUCERS ////////////////////////////////////////////////////////////////////////////////////////

const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return state;

    default:
      return state;
  }
};

// STORE ///////////////////////////////////////////////////////////////////////////////////////////

const store = createStore(testReducer);

export default store;
export { TEST_ACTION, testAction };
