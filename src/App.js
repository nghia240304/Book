import { Outlet } from "react-router-dom";
import Nav from "./conponents/Nav";
import Footer from "./conponents/Footer";

function App() {
  return (
    <div className="lg:w-[1090px] lg:mx-auto w-full">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
