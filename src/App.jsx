import { useSelector } from "react-redux";
import { applyTheme } from '../src/components/theme/theme.js';
import "./App.css";

import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
