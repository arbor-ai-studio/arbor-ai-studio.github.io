/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

// import Team from 'assets/images/hero/team.png';
import teamSvg from '../assets/images/hero/undraw_team_collaboration_re_ow29.svg';

import colors from '../themeColors';

import { useDynamicSvg } from '../svgBgChanger';

import {
  ActiveTheme,
  SecondaryColor,
  teamHeader,
  teamSubtitle,
} from '../customize';

export default function HeroTeam() {
  const colorMappings = {
    '#536dfe': colors[ActiveTheme], // Old color: new color
  };
  const svgContent = useDynamicSvg(teamSvg, colorMappings);
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">

      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className={`text-6xl text-${SecondaryColor} font-bold leading-tight mb-5`}>
            {teamHeader}
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            {teamSubtitle}
          </p>
        </Fade>
      </div>
      <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce delay={300}>
        <div
          className="svg-container" // Using the updated CSS class
          dangerouslySetInnerHTML={{ __html: svgContent }} // eslint-disable-line react/no-danger
        />
        </Fade>
      </div>
    </section>
  );
}
