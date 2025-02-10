/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/undraw_vr_chat_re_s80u.svg';

import { useDynamicSvg } from 'svgBgChanger';

import {
  SecondaryColor,
  projectsHeader,
  projectsSubtitle,
  ColorMappings,
} from '../customize';

export default function HeroPortfolio() {
  const svgContent = useDynamicSvg(heroPortfolio, ColorMappings);
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className={`text-6xl text-${SecondaryColor} font-bold leading-tight mb-5`}>{projectsHeader}</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            {projectsSubtitle}
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
        <div
          className="svg-container" // Using the updated CSS class
          alt="Hero"
          dangerouslySetInnerHTML={{ __html: svgContent }} // eslint-disable-line react/no-danger
        />
        </Fade>
      </div>
    </section>
  );
}
