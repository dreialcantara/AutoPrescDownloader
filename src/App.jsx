import Presc from "./components/Presc";
import Invoic from "./components/Invoic";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="mt-1 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <img className="img-fluid" src="/src/assets/logo.png" alt="" />
      <p className="display-4 header">PHARMACY DOWNLOAD MANAGER</p>
      <div className="w-50 d-flex justify-content-between align-items-center mt-3">
        <Presc />
        <Invoic />
      </div>
    </div>
  );
}

export default App;
