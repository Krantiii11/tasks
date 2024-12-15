import React, { useState } from 'react';
import '';

function App() {
  // Declare a state variable 'count' with a default value of 0
  const [count, setCount] = useState(0);

  // Increment function to increase count
  const increment = () => setCount(count + 1);

  // Decrement function to decrease count
  const decrement = () => setCount(count - 1);

  // Reset function to set count back to 0
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset} className="reset-btn">Reset</button>
    </div>
  );
}

export default App;
