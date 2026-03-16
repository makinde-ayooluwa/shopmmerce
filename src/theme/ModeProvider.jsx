import { useState } from "react";
import { Mode } from "./Mode";
import useModeLocalStorage from "../hooks/useLocalStorage";

export default function ModeProvider({ children }) {
    const [mode, setMode] = useModeLocalStorage("mode");
  return <Mode.Provider value={{ mode, setMode }}>{children}</Mode.Provider>;
}
