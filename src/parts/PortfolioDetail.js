/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-awesome-reveal';

import NotFound from 'assets/images/undraw_page_not_found_re_e9o6.svg';

import { useDynamicSvg } from 'svgBgChanger';

import colors from 'themeColors';

import Button from 'elements/Button';

import { ActiveTheme, SecondaryColor } from '../customize';

export default function PortfolioDetail({ data }) {
  if (data === null) {
    const colorMappings = {
      '#536dfe': colors[ActiveTheme], // Old color: new color
    };
    const svgContent = useDynamicSvg(NotFound, colorMappings);
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div 
              className="flex w-full justify-center"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
            <h1 className={`text-${SecondaryColor} text-2xl text-center mt-5`}>
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/project" type="link" className={`flex w-30 h-10 px-5 mt-5 bg-${SecondaryColor} text-white items-center rounded transform transition duration-500 hover:bg-gray-900`}>
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Project
        </Button>
      </Fade>

      {
        data.map((item) => (
          <div className="flex flex-col mt-8 justify-center">
            <Fade bottom triggerOnce>
              <h1 className={`text-5xl text-${SecondaryColor} text-center font-bold`}>{item.title}</h1>

              <p className="font-light text-xl text-gray-400 text-center mb-10">
                {item.type}
              </p>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex justify-center xl:mb-6">
                <img src={item.imageUrl} alt="Project" className="flex w-4/5 sm:w-4/6" />
              </div>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                <h1 className={`text-3xl text-${SecondaryColor} font-bold mb-3`}>
                  Project Detail
                </h1>

                <p 
                  className="font-light text-lg text-gray-400 text-justify"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                <h1 className={`text-3xl text-${SecondaryColor} font-bold mb-5`}>
                  Project Responsibilities
                </h1>

                <div className="flex flex-row ml-1">
                  {
                    item.responsibility.map((responsibility) => (
                      <div className={`mr-4 px-6 py-3 text-${ActiveTheme} border border-${ActiveTheme} rounded-full shadow-lg`}>
                        {responsibility}
                      </div>
                    ))
                  }
                </div>
              </div>

              <p className="font-light text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">

                Interested? Let&apos;s get started! <br /><br /> 
                
                <Button
                  type="link" 
                  className={`font-normal px-5 py-2 mr-3 text-${ActiveTheme} text-lg border border-${ActiveTheme} rounded-full transition duration-300 hover:bg-${ActiveTheme} hover:focus:outline-none focus:bg-${ActiveTheme} focus:text-white`} 
                  target="_blank" 
                  isExternal
                  href={item.buyNowLink} // add pricing link here
                >Visit</Button>
                
                {/* * This project is just example.
                {' '}
                <br />
                Original project :
                {' '}
                <Button type="link" href={item.credit} target="_blank" className={`text-${ActiveTheme}`} isExternal>{item.credit}</Button> */}
              </p>
            </Fade>
          </div>
        ))
      }
    </section>
  );
}
