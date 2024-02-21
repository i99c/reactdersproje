import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="my-2">
      <button className="btn btn-danger" onClick={azalt}>
        -
      </button>
      <span className="mx-2">{count}</span>
      <button className="btn btn-success" onClick={arttir}>
        +
      </button>
    </div>
  );
}

export default Counter;
