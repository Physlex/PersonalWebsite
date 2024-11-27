/**
 * Defines the header for the base application.
 */


import { Box } from '@mui/material';
import { default as Navbar } from './Navbar';


/**
 * This component defines the header for the application.
 * @param { HeaderParams } params See the HeaderParams type definition.
 * @returns { JSX.Element } The header component.
 */
export default function Header(): JSX.Element {
    return (
        <Box id="header">{
            <Navbar label="Alexanders Portfolio">
            </Navbar>
        }</Box>
    );
}
