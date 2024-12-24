/**
 * This module defines the colored Typography component.
 */

import { css } from '@emotion/react';


/**
 * A set of parameters that handle variants on the colored component.
 * 
 * @param { string } color The color of the text to place within.
 * 
 * @param { string } fontWeight The level of 'bolding' used on the text. Default is
 * typically 300. But, some applications use 500, 700, etc.
 * 
 * @param { string | JSX.Element } children Either a string, or some react component to be
 * rendered within the colored tag. 
 */
export type ColoredParams = {
    color?: string;
    fontWeight?: string;
    children?: string | JSX.Element;
};

/**
 * Simple bring attention to utility component that handles inline font weight and
 * coloring.
 * 
 * @param { ColoredParams } params See the `ColoredParams` documentation for details.
 * @returns The rendered component.
 */
export default function Colored({
    color = "white",
    fontWeight = "normal",
    children
}: ColoredParams): JSX.Element {

    return (
        <span>
            <b css={css`color: ${color}; font-weight: ${fontWeight}`}>
                {children}
            </b>
        </span>
    );
}
