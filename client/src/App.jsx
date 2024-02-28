// client/src/App.js
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./Routing";

export default function App(){
  return (
    <div className="App">
      <header>
      </header>
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}