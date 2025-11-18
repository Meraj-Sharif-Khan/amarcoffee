import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice.js";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleTheme());
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
