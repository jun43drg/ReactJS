import { useState } from "react";
const Counter = () => {
  let [Count, setCount] = useState(0);
  // const onIncreaseHandler = () => {
  //   const newValue = Count + 1;
  //   setCount(newValue);
  // };
  // const onDecreaseHandler = () => {
  //   const newValue = Count -   1;
  //   setCount(newValue);
  // };
  const onCounterHandler = (value) => () => {
    const newValue = Count + value;
    setCount(newValue);
  };
  return (
    <>
      <h1>Counter example</h1>
      <button onClick={onCounterHandler(-1)}>Decrease (-)</button>
      <label
        style={{
          padding: "0 16px",
        }}
      >
        {Count}
      </label>
      <button onClick={onCounterHandler(1)}>Increase (+)</button>
    </>
  );
};

export default Counter;
