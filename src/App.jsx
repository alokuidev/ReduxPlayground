import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import hooks to interact with Redux
import { increment, decrement, incrementByAmount } from "./redux/counterSlice"; // Import actions

const App = () => {
  const count = useSelector((state) => state.counter.value); // Get counter value from Redux store
  const dispatch = useDispatch(); // Get dispatch function to trigger actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2> {/* Display the counter value */}

      {/* Buttons to dispatch Redux actions */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default App;
