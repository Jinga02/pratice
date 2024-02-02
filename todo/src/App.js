import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import TodoList from "./component/todo/TodoList";
import { TodoProvider } from "./context-api/state";
import Calendar from "./component/calendar/Calendar";
function App() {
  const headers = ["all", "active", "completed"];
  const [header, setHeader] = useState(headers[0]);

  return (
    <TodoProvider>
      {/* <Calendar /> */}
      <div className="wrapper">
        <Header headers={headers} header={header} setHeader={setHeader} />
        <TodoList header={header} />
      </div>
    </TodoProvider>
  );
}

export default App;
