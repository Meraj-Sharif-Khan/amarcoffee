import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/themeSlice.js";

const ToggleButton = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const storeTheme = JSON.stringify(mode === "light" ? "dark" : "light");

  const handleMode = () => {
    localStorage.setItem("theme", storeTheme);
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button
        onClick={() => handleMode()}
        className={`cursor-pointer flex items-center w-[60px] h-5 rounded-full px-1 transition-colors duration-300 bg-foreground`}
      >
        {/* Circle */}
        <div
          className={`w-3 h-3 shrink-0 rounded-full transition-all duration-300 bg-background ${
            mode === "light" ? "translate-x-10" : "translate-x-0"
          }`}
        ></div>

        {/* Text */}
        <span
          className={`ml-1 text-[12px] font-medium transition-colors duration-300 text-[#ffffff] ${
            mode === "light" ? "-translate-x-2.5" : "translate-x-0"
          } `}
        >
          {mode === "light" ? "Dark" : "Light"}
        </span>
      </button>
    </div>
  );
};

export default ToggleButton;
