// client/src/App.js
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./Routing";
import { StyledEngineProvider } from "@mui/system";
import SearchProvider from "./context/SearchContext";

export default function App(){
  return (
    <div className="App">
    <StyledEngineProvider injectFirst>
      <SearchProvider>
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </SearchProvider>
    </StyledEngineProvider>
    </div>
  );
}