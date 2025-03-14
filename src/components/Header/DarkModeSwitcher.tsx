import useColorMode from '../../hooks/useColorMode';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button onClick={() => setColorMode?.(colorMode === "light" ? "dark" : "light")}>
      {colorMode === "dark" ? <MdDarkMode size={24} color="#969AA1" /> : <MdLightMode size={24} color="#969AA1" />}
    </button>
  );
};

export default DarkModeToggle;
