/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button/index.js';

import {
  ActiveTheme,
  SecondaryColor,
  footerSubtitle,
  footerOfficeEmail,
  footerOfficeLocation,
  footerCopyright,
  footerCopyrightSublinePartA,
  footerCopyrightSublinePartB,
  partBbuttonLink,
  instagramLink,
  linkedinLink,
  githubLink,
} from '../customize';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              {footerSubtitle}
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className={`text-lg text-${SecondaryColor} pt-4 pb-2`}>
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              {footerOfficeEmail}
            </p>
            <p className="text-lg text-gray-400 font-light">
              {footerOfficeLocation}
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className={`text-lg text-${SecondaryColor} pt-4 pb-2`}>
              Social
            </h1>
            <Button href={linkedinLink} type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href={instagramLink} type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href={githubLink} type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            {footerCopyright}
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              {footerCopyrightSublinePartA}
            </p>
            <Button href={partBbuttonLink} type="link" target="_blank" className={`text-lg text-${ActiveTheme} font-light`} isExternal>
              {footerCopyrightSublinePartB}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
