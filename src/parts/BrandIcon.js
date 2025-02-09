/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

import { 
  ActiveTheme, 
  BrandIconPartAColor, 
  brandIconPartA, 
  brandIconPartB,
} from '../customize';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className={`text-${BrandIconPartAColor} text-4xl font-medium`}>
        {brandIconPartA}
        <span className={`text-${ActiveTheme}`}> {brandIconPartB}</span>
      </p>
    </Button>
  );
}
