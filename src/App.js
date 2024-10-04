import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
    </div>
  );
}

export default App;
