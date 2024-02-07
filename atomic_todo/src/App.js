import { useSelector } from "react-redux";
import TodoPage from "./pages/TodoPage";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <TodoPage />;
}

export default App;
