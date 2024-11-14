/**
 * Defines the header for the base application.
 */


import { default as Navbar } from './Navbar';


/**
 * Parameters to be defined on a header component.
 * 
 * @param { boolean } hidden Whether the content of the header is visible or not.
 */
type HeaderParams = {
    hidden: boolean;
};

/**
 * This component defines the header for the application.
 * @param { HeaderParams } params See the HeaderParams type definition.
 * @returns { JSX.Element } The header component.
 */
export default function Header(params: HeaderParams): JSX.Element {
    return (
        <div id="header">{!params.hidden &&
            <Navbar />
        }</div>
    );
}
