import { Outlet } from "react-router-dom";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="relative ">
      <Home />
      <Outlet />
      <Contact />
    </div>
  );
}

export default App;
