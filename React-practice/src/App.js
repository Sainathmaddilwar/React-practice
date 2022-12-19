import "./styles.css";
import react from "react";
import { useState, useRef, useEffect } from "react";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const btnref = useRef();
  const changeMe = () => {
    btnref.current.style.color = "red";
    console.log(btnref.current);
  };
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <button ref={btnref} onClick={changeMe}>
        change me
      </button>
    </>
  );
}
