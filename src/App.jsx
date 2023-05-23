import Presc from "./components/Presc";
import Invoic from "./components/Invoic";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";

function App() {
  return (
    <div className="mt-1 w-100 h-100 d-flex flex-column justify-content-around align-items-center">
      <img
        className="img-fluid"
        src="https://ai-jobs.net/media/company/logo/22/04/MenofManual.png"
        alt=""
      />
      <p className="text-center display-4 header">PHARMACY DOWNLOAD MANAGER</p>
      <div className="w-50 d-flex justify-content-around align-items-center mt-3">
        <Presc />
        <Invoic />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
