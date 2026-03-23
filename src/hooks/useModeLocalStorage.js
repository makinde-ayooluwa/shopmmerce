import { useState } from "react";

function useModeLocalStorage(key) {
  function getValue() {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : "light";
  }
  const [valueState, setValueState] = useState(() => getValue());
  function setValue(dValue) {
    setValueState(dValue);
    localStorage.setItem(key, JSON.stringify(dValue));
  }
  return [valueState, setValue];
}
export default useModeLocalStorage;
