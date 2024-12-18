/**
 * This file defines the module interface for the hero page. All private components, and
 * page formatting, will be implemented in the appropriately named react component.
 */

import { Grid2 as Grid, Stack, Typography, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { css } from "@emotion/react";

import { Colored } from "../../components/ui";


// TODO: REPLACE WITH MUI THEMES

const DARK_PURPLE_HEX = "#3C096C";
// const MEDI_PURPLE_HEX = "#5A189A";
const LIGHT_PURPLE_HEX = "#9D4EDD";
const LIGHT_ORANGE_HEX = "#FFC880";
const MEDI_ORANGE_HEX = "#FF9100";


/**
 * Defines the first thing that the user will see when visiting my website. Includes an
 * image defined in 'public' alonsidge some special text.
 * 
 * Must be wrapped in a grid container to properly render
 * @returns The landing section of the page.
 */
function Landing(): JSX.Element {
    const landingTextLength = 6;
    const landingTextVar = "h3";

    const transitionTimeMs = 100;
    const inlineContactLink = (
        <Link
            to="/contact"
            component={RouterLink}
            underline="none"
            css={css`
                & {
                    color: ${LIGHT_ORANGE_HEX};
                    transition: color ${transitionTimeMs}ms;
                }

                &:hover {
                    color: ${MEDI_ORANGE_HEX};
                    cursor: pointer;
                }
            `}>
                here
        </Link>
    );

    return (
        <Grid
            container
            size={12}
            height="100vh"
            width="100%"
            padding="2%"
            css={css`
                background-color: ${DARK_PURPLE_HEX};
                color: ${LIGHT_PURPLE_HEX};
            `}>
            <Grid size={landingTextLength}>
                <Stack>
                    <Typography variant={landingTextVar} >
                        Hi! I'm Alex.
                        <br />
                        <Colored color={MEDI_ORANGE_HEX}>Welcome</Colored> to my website!
                        <br /><br />
                    </Typography>
                </Stack>
                <Typography fontSize={"1.1rem"}>
                    I'm a Software Engineer focusing on the fields of full-stack web
                    development and embedded systems!
                    <br /><br />

                    I'm a small-time indie dev in the making, league player, hackathon
                    enjoyer, and all-around a pretty competitive, fun-loving guy!
                    <br /><br />

                    On this website is a list of projects I have created or competitions
                    I have performed in. These include audio-genre classifiers, rocket
                    telemetry systems, web applications, and more!
                    <br /><br />

                    you can also find hiring information like my resume and contact
                    information, which can be found <span>{inlineContactLink}</span>.
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
        </Grid>
    )
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
    return (
        <Grid container spacing={2}>
            <Landing />
            <Divider />

            {/* Content */}

            <Grid size={12}></Grid>
            <Divider />

            {/* CTA */}

            <Grid></Grid>
            <Divider />
        </Grid>
    )
}
