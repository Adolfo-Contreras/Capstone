// client/src/App.js
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./Routing";
import { StyledEngineProvider } from "@mui/system";

export default function App(){
  return (
    <div className="App">
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    </StyledEngineProvider>
    </div>
  );
}