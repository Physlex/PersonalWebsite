/**
 * This file defines the module interface for the hero page. All private components, and
 * page formatting, will be implemented in the appropriately named react component.
 */

import { Grid2 as Grid, Typography, SxProps, Theme } from "@mui/material";
import { css } from "@emotion/react";

import { Colored, Link, Panel } from "../../components/ui";

import { default as ContactForm } from './ContactForm';
import { default as Timeline, TimelineDetails as Details } from './Timeline';

// TODO: REPLACE WITH MUI THEMES

const DARK_PURPLE_HEX = "#3C096C";
// const MEDI_PURPLE_HEX = "#5A189A";
const LIGHT_PURPLE_HEX = "#9D4EDD";
// const LIGHT_ORANGE_HEX = "#FFC880";
const MEDI_ORANGE_HEX = "#FF9100";


/*** COMPONENTS *************************************************************************/

/**
 * Defines the first thing that the user will see when visiting my website. Includes an
 * image defined in 'public' alongside some special text.
 * 
 * Must be wrapped in a grid container to properly render
 * @returns The landing section of the page.
 */
function Landing(): JSX.Element {
    const landingTextLength = 6;
    const landingTextVar = "h3";
    const contactLink = <Link
        to="/contact"
        color="white"
        xColor={MEDI_ORANGE_HEX}
        xTimeMs={200}
    >
        here
    </Link>;

    return (
        <>
            <Grid
                display="flex"
                flexDirection="column"
                size={landingTextLength}
                justifyContent="center"
                alignItems="center">
                <Typography margin="0 5%" variant={landingTextVar} >
                    Hi! I'm <Colored color={MEDI_ORANGE_HEX}>Alex</Colored>. Welcome to my
                    website!
                    <br /><br />
                </Typography>
                <Typography margin="0 5%" fontSize={"1.1rem"}>
                    I'm a Software Engineer specializing in full-stack and embedded
                    systems.
                    <br /><br />

                    I'm a hackathon enjoyer, open-source contributor, game developer,
                    league player, and soon-to-be graduate.
                    <br /><br />

                    To learn more, explore the respective pages of whichever most
                    interests you. Or, click <span>{contactLink}</span> to go
                    straight to my software portfolio.
                    <br /><br />
                </Typography>
            </Grid>
            <Grid
                id="landing-picture"
                size={12 - landingTextLength}
                margin="0 auto"
                justifyContent={"center"}
                alignContent={"center"}
                textAlign={"center"}>
                <img
                    src={"IMG_1861.png"}
                    alt="A nice picture"
                    css={css`
                        margin: 0 auto;
                    `}
                    >
                </img>
            </Grid>
        </>
    );
}


/**
 * This method defines the hero page, which tells the website visitor:
 * - Who you are
 * - What you do
 * - Why they should care
 * - What to do next, if they do
 * 
 * @returns { JSX.Element } The hero page, with associated logic and state.
 */
export default function Hero(): JSX.Element {
    const landingStyles = {
        backgroundColor: DARK_PURPLE_HEX,
        color: LIGHT_PURPLE_HEX,
    } as SxProps<Theme>;

    return (
        <Grid container spacing={2}>
            <Panel sx={landingStyles} component={<Landing />} />
            <Panel vh={2} component={<Timeline />} />
            <Panel component={<Details />} />
            <Panel component={<ContactForm />} />
        </Grid>
    );
}
