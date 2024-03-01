// client/src/App.js
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./Routing";

export default function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}