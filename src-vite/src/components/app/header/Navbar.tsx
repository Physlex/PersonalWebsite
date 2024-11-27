/**
 * TODO: DOCS
 */


import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";


/**
 * Parameters to pass into the navbar.
 * @param { string } label the main left-aligned label of the navigation bar.
 * @param { ReactNode } children
 */
type NavbarParams = {
    label: string;
    children?: React.ReactNode;
}

/**
 * Navigation bar for the rest of the application.
 */
export default function Navbar({ label, children }: NavbarParams): JSX.Element {
    return (
        <Box id="navbar">
            <AppBar>
                <Typography>{label}</Typography>
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
