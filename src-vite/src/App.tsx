/**
 * Application entry point. Highest level in the application, integrates loader services,
 * pages, and components together to create a single-page application.
 */


import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';


// Various rules for the application base styling
const appStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 10px;
`;

/**
 * The application entry point.
 * 
 * @returns The application 'root' (entry point), structured via the router.
 */
export default function App(): JSX.Element {
  return (
    <div
      id="app"
      css={appStyles}>
      {/* <Header /> */}
      Hello React!
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
