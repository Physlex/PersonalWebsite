/**
 * Layout for the react application. This defines the structure of the single-page-app
 * based on the url assigned to it.
 */


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { default as App } from './App';
import { Hero } from './pages';


// Just defines the router that will be used in the Layout component to structure our app
export const layoutRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} >
            <Route path="/" element={<Hero />} />
            {/** TODO:
             * <Route path="about/" element={<About />}/>
             * <Route path="projects/" element={<Projects />}/>
            */}
        </Route>
    ),
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);
