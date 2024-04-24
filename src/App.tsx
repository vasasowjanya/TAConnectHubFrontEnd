import { Toaster } from "react-hot-toast";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
