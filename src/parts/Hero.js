import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useDynamicSvg } from 'svgBgChanger.js';
import Button from '../elements/Button/index.js';
import controlAiSvg from '../assets/images/hero/control_ai.svg';
import {
  ActiveTheme,
  heroTitleText,
  subtitleText,
  SecondaryColor,
  ColorMappings,
} from '../customize.js';

export default function Hero() {
  const svgContent = useDynamicSvg(controlAiSvg, ColorMappings);
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className={`text-5xl sm:text-6xl text-${SecondaryColor} font-bold leading-tight mb-5`}>
          {heroTitleText}
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          {subtitleText}
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className={`flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-${ActiveTheme} rounded-lg shadow-2xl hover:bg-dark-${ActiveTheme} transition duration-200`}
          >
            See Our Work
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
        <div
          className="svg-container" // Using the updated CSS class
          dangerouslySetInnerHTML={{ __html: svgContent }} // eslint-disable-line react/no-danger
        />
        </Fade>
      </div>
    </section>
  );
}
