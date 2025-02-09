/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Fade from 'react-awesome-reveal';

import { ActiveTheme, SecondaryColor, ColorMappings } from 'customize';

import { useDynamicSvg } from 'svgBgChanger';

function SvgDisplay({ svgUrl, colorMappings }) {
  const svgMarkup = useDynamicSvg(svgUrl, colorMappings);
  return (
    <div
      className="w-1/3 advantages-svg-container"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

export default function Advantage({ data }) {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className={`text-5xl text-${SecondaryColor} text-center font-bold`}>Why Choose Us</h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project?
          </p>
        </Fade>

        <div className="flex flex-col lg:flex-row"> {/* Changed from sm:flex-row to lg:flex-row */}
          <div className="flex-col">
            {
              data[0].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className={`bg-white flex flex-col lg:flex-row items-center p-3 my-6 mx-3 lg:my-7 lg:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-${ActiveTheme} transform transition duration-500 hover:scale-105`}>
                      <SvgDisplay svgUrl={item.svgUrl} colorMappings={ColorMappings} />
                      <div className="flex-col pl-0 lg:pl-5 mt-4 lg:mt-0 text-center lg:text-left">
                        <h2 className={`text-${SecondaryColor} text-2xl`}>{item.title}</h2>
                        <p className="font-light text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="flex-col -mt-4 lg:mt-14">
            {
              data[1].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div>
                    <div className={`bg-white flex flex-col lg:flex-row items-center p-3 my-6 mx-3 lg:my-7 lg:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-${ActiveTheme} transform transition duration-500 hover:scale-105`}>
                      <SvgDisplay svgUrl={item.svgUrl} colorMappings={ColorMappings} />
                      <div className="flex-col pl-0 lg:pl-5 mt-4 lg:mt-0 text-center lg:text-left">
                        <h2 className={`text-${SecondaryColor} text-2xl`}>{item.title}</h2>
                        <p className="font-light text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
