import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import LoadingSpinner from "./Pages/Shared/Loader/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // window.addEventListener("load", (event) => {
  //   setIsLoading(false);
  // });
  return (
    <div>
      {isLoading ? (
        <div>
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div className="App">
          <Home></Home>
        </div>
      )}
    </div>
  );
}

export default App;
