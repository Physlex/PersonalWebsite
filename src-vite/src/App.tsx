/**
 * Application entry point. Highest level in the application, integrates loader services,
 * pages, and components together to create a single-page application.
 */


import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';


/**
 * The application entry point.
 * 
 * @returns The application 'root' (entry point), structured via the router.
 */
export default function App(): JSX.Element {
  return (
    <div
      id="app">
      <Header hidden={false} />
      <Outlet />
      <Footer />
    </div>
  );
}
