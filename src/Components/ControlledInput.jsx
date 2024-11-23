import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  function handleInput(event) {
    const input = event.target.value;

    if (input.length <= 6) {
      setInputValue(input);
      setDisplayValue(input);
      let display = "";
      for (let i = 0; i < input.length; i++) {
        setTimeout(() => {
          display += "*";
          setDisplayValue(display);
        }, 1000);
      }
    }
  }

  return (
    <>
      <div>
        <input type="text" value={displayValue} onChange={handleInput}></input>
      </div>
    </>
  );
}

export default ControlledInput;
