/**
 * This module defines the colored link component.
 */

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkWrapper, SxProps, Theme } from "@mui/material";

/**
 * This type defines the public api of the Link element.
 *
 * @param { string } to The destination of the link element.
 *
 * @param { string | undefined } color The initial color of the link text content. If
 * unspecified, defaults to 'inherit'.
 *
 * @param { number | undefined } xTimeMs The amount of milliseconds it takes for the
 * transition to conclude. Defaults to 0 (no transition).
 *
 * @param { string | undefined } xColor The color that the link will transition to after
 * the transition time fully elapses. Defaults to white.
 *
 * @param { SxProps<Theme> } sx The sx element inherited from MUI, used to specify
 * more explicity css details.
 *
 * @param { string | JSX.Element | undefined} children The inner elements that the link
 * will 'wrap'. Everything in the link will have it's colors and styles set according to
 * standard css rules.
 */
export type LinkParams = {
  to: string;
  color?: string;
  xTimeMs?: number;
  xColor?: string;
  sx?: SxProps<Theme>;
  children?: string | JSX.Element;
};

/**
 * Defines a default styling for a link element, wrapping the mui link style wrapper
 * around the react-router-dom link component.
 *
 * @param { LinkParams } params See parameter docs for more details.
 * @returns A rendered link component, encapsulating some interior element.
 */
export default function Link({
  to,
  color = "inherit",
  xTimeMs = 0,
  xColor = "white",
  sx = {},
  children,
}: LinkParams): JSX.Element {
  return (
    <LinkWrapper
      to={to}
      component={LinkRouter}
      underline="none"
      sx={{
        color: `${color}`,
        transition: `color ${xTimeMs}ms`,
        "&:hover": {
          color: `${xColor}`,
          cursor: "pointer",
        },
        ...sx,
      }}
    >
      {children}
    </LinkWrapper>
  );
}
