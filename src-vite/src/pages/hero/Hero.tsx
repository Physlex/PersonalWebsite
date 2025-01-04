/**
 * This file defines the module interface for the hero page. All private
 * components, and page formatting, will be implemented in the appropriately
 * named react component.
 */

import { Grid2 as Grid, Typography } from "@mui/material";

import { css } from "@emotion/react";

import { Colored, Link, Panel } from "../../components/ui";

import { default as ContactForm } from "./ContactForm";
import { default as Timeline, TimelineDetails as Details } from "./Timeline";

/** COMPONENTS ***************************************************************/

/**
 * Defines the first thing that the user will see when visiting my website.
 * Includes an image defined in 'public' alongside some special text.
 *
 * Must be wrapped in a grid container to properly render
 * @returns The landing section of the page.
 */
function Landing(): JSX.Element {
  const landingTextVar = "h3";
  const contactLink = (
    <Link to="/contact" color="white" xColor="secondary.main" xTimeMs={200}>
      here
    </Link>
  );

  return (
    <>
      <Grid
        display="flex"
        flexDirection="column"
        size={12}
        justifyContent="center"
      >
        <Typography margin="0 5%" variant={landingTextVar}>
          Hi! I'm <Colored color="secondary.dark">Alex</Colored>
          . Welcome to my website!
          <br />
          <br />
        </Typography>
        <Typography margin="0 5%" fontSize={"1.1rem"}>
          I'm a Software Engineer specializing in full-stack and embedded
          systems.
          <br />
          <br />
          I'm a hackathon enjoyer, open-source contributor, game developer,
          league player, and soon-to-be graduate.
          <br />
          <br />
          To learn more, explore the respective pages of whichever most
          interests you. Or, click <span>{contactLink}</span> to go straight to
          my software portfolio.
          <br />
          <br />
        </Typography>
      </Grid>
    </>
  );
}


/** STYLING ******************************************************************/

const HB_NOISE_URL = "/static/assets/hero/noise.svg";
const HB_GRADIENT = `linear-gradient(to bottom right, #4004a1, #2803ad)`;

const HERO_BACKGROUND = css`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${HB_GRADIENT}, url("${HB_NOISE_URL}");
    filter: contrast(170%) brightness(1000%);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

/** PAGE **********************************************************************/

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
  const panels = [
    <Panel component={<Landing />} />,
    <Panel vh={2} component={<Timeline />} />,
    <Panel component={<Details />} />,
    <Panel component={<ContactForm />} />
  ]

  return (
    <Grid css={HERO_BACKGROUND} container spacing={2}>
      {panels && panels.map((panel) => { return panel; })}
    </Grid>
  );
}
