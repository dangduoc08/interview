/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";

const HookDebug = () => {
  const [userName, setUserName] = useState({ name: "John" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [userName.name]);

  const changeCount = useCallback(() => {
    // Problem 1: Count up number without changing the useCallback dependency
  }, []);

  return (
    <div>
      <div>{count}</div>
      <div onClick={changeCount}>Count me</div>

      {/* Problem 2 : click username only count up the number 1 time
          Expect: Count the number up eveytime click username
       */}
      <div onClick={() => setUserName({ name: "KEN" })}>{userName.name}</div>
    </div>
  );
};

export default HookDebug;
