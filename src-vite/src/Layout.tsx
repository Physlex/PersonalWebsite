/**
 * Layout for the react application. This defines the structure of the single-page-app
 * based on the url assigned to it.
 */


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { BaseApp, NavigableApp } from './App';
import { Hero } from './pages';


// Just removes annoying warnings
const preventFutureWarning = {
    future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
    },
}

// Just defines the router that will be used in the Layout component to structure our app
export const layoutRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<BaseApp />} >
                <Route path="/" element={<Hero />}/>
            </Route>
            <Route element={<NavigableApp />}>
            </Route>
        </Route>
    ),
    preventFutureWarning
);
