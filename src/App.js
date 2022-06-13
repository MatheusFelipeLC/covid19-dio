import React from "react";
import { StyledEngineProvider } from "../node_modules/@material-ui/core/index";
import { CssBaseline } from "../node_modules/@material-ui/core/index";
import GlobalStyles from './commons/styles/global-styles'
import Main from './containers/Main'

function App() {
  return (
   <StyledEngineProvider injectFirst>
     <CssBaseline/>
     <GlobalStyles />
     <Main/>
   </StyledEngineProvider>
  );
}

export default App;
