/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

import {
  ActiveTheme,
  SecondaryColor,
  servicesHeader,
  servicesSubtitle,
  ColorMappings,
} from '../customize';

import { useDynamicSvg } from '../svgBgChanger';

function SvgDisplay({ svgUrl, colorMappings }) {
  const svgMarkup = useDynamicSvg(svgUrl, colorMappings);
  return (
    <div
      className="services-svg-container w-full rounded-t-2xl "
      // fit parent container
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className={`text-5xl text-${SecondaryColor} text-center font-bold`}>{servicesHeader}</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            {servicesSubtitle}
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade direction={item.animation} delay={500 * index} key={index} triggerOnce>
                <div>
                  <div className={`bg-white group rounded-2xl shadow-2xl border border-light-${ActiveTheme} transform transition duration-500 hover:scale-105`}>
                    <SvgDisplay svgUrl={item.svgUrl} colorMappings={ColorMappings} />
                    <h2 className={`text-${SecondaryColor} text-center text-xl py-7 rounded-b-2xl`}>{item.title}</h2>
                  </div>
                </div>
              </Fade>
            ))
          }
        </div>
      </div>
    </div>
  );
}
