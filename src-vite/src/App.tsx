/**
 * Application entry point. Highest level in the application, integrates loader services,
 * pages, and components together to create a single-page application.
 */

import { Outlet } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import { Header, Footer } from "./components/app";
import { LightModeThemeProvider } from "./themes/";

/**
 * Generic application context component. Defines an outlet in a named fashion.
 * @returns The context, rendered with the outline replaced via react-router-dom.
 */
function Context(): JSX.Element {
  return (
    <Box id="context">
      <Outlet />
    </Box>
  );
}

/**
 * The application entry point.
 *
 * @returns The application 'root' (entry point), structured via the router.
 */
export function BaseApp(): JSX.Element {
  return (
    <LightModeThemeProvider>
      <CssBaseline />
      <Box className="app">
        <Context />
        <Footer />
      </Box>
    </LightModeThemeProvider>
  );
}

/**
 * The application layout, with associated navigation bar and other header information.
 * @returns
 */
export function NavigableApp(): JSX.Element {
  return (
    <LightModeThemeProvider>
      <CssBaseline />
      <Box className="navigable-app">
        <Header />
        <Context />
        <Footer />
      </Box>
    </LightModeThemeProvider>
  );
}
