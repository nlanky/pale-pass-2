// REACT
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// PUBLIC MODULES
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// LOCAL FILES
// Components
import { Router } from "features/system/components";
// CSS
import "@fontsource/cormorant-garamond";
import "main.css";
// Redux
import { persistor, store } from "features/redux/store";
// Theme
import { theme } from "features/common/theme";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Router />} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
