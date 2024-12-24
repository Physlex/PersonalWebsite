/**
 * This module combines the saved fonts, icons, etc, to define custom theming for a light
 * mode implementation.
 * 
 * See the LightModeThemeProvider component for more details.
 */

import { getBaiJamJureeFontFaces } from './Fonts';
import { createTheme, Theme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


// Basic default theme for light mode.
const lightModeTheme = createTheme({
    typography: {
        fontFamily: 'Bai Jamjuree, Arial, sans-serif'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: getBaiJamJureeFontFaces(),
        }
    }
});

// Wrapper interface for light mode parameters. Accepts the same interface as the
// ThemeProvider component.
export interface LightModeParams {
    theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children: React.ReactNode;
};

/**
 * This component defines a simple wrapper around the default ThemeProvider component.
 * 
 * Defines a custom light-mode theme which ensures consistency across the website.
 * Is part of the couplet of standard modes (light and dark).
 * 
 * @param { LightModeParams } params See the 'LightModeParams' documentation for more
 * details.
 * 
 * @returns A theme provider component, which can wrap an application (including
 * CSSBaseline component) to provide consistent global styles for specfied component types
 * in material ui.
 * 
 * @example
 * 
 * The following would showcase the equivalent 'hello world' of this kind of component.
 * 
 * ```tsx
 * const App = () => (
 *  <LightModeThemeProvider theme={{ primaryColor: 'blue' }}>
 *      <CssBaseline />
 *      <p>Hello, this is light mode!</p>
 *  </LightModeThemeProvider>
 * );
 * ```
 * 
 * It provides a set of default themes with possible override through the 'theme' param,
 * enabling flexible light mode theming implementation.
 */
export default function LightModeThemeProvider({
    theme = {},
    children
}: LightModeParams): JSX.Element {
    console.log(theme, lightModeTheme);
    return (
        <ThemeProvider theme={{...theme, ...lightModeTheme}}>
            {children}
        </ThemeProvider>
    );
}
