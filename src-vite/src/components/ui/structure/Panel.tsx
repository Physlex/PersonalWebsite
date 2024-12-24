/**
 * This module defines the panel structural component, for creating screen-high container
 * components.
 */

import { Grid2 as Grid, SxProps, Theme } from '@mui/material';


/**
 * These params define the API for the panel structural component.
 * 
 * @param { number } vh The number of viewheights that the panel will span. Default is 1.
 * 
 * @param { JSX.Element } component The embedded component which the panel will format.
 * If the component uses gridv2 components to further format using @mui, then they will be
 * structured as though there is an invisible parent grid container.
 * 
 * @param { SxProps<Theme> | undefined } sx A dependency injected stylesheet.
 */
export type PanelParams = {
    component: JSX.Element;
    vh?: number;
    sx?: SxProps<Theme>;
}

/**
 * TODO: DOCS
 * 
 * @param { PanelParams } param The panel api. See PanelParams for more details.
 * @returns The rendered panel component. 
 */
export default function Panel({ vh=1, component, sx=[] }: PanelParams): JSX.Element {
    console.log(sx);
    return (
        <Grid
            id="grid-panel"
            container
            size={12}
            sx={[
                {
                    height: `${vh*100}vh`,
                    width: "100%",
                    padding: "2%",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {component}
        </Grid>
    );
}
