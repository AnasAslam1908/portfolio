import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Home />
    </>
  );
}

export default App;
