import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Toaster />
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
