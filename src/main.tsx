// REACT
import { StrictMode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom/client";

// PUBLIC MODULES
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

// LOCAL FILES
// Components
import { App } from "App";
// Redux
import { persistor, store } from "features/redux/store";
// Styling
import "@fontsource/cormorant-garamond";
import "main.css";
import { theme } from "features/common/theme";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router basename="/pale-pass-2">
            <DndProvider backend={HTML5Backend}>
              <App />
            </DndProvider>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
