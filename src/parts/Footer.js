/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-white border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-evenly">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-600 font-light">
              Growing Your Business
              
              Is Our Calling
            </p>
          </div>
          
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-600 font-light">
            Copyright 2024 - All rights reserved - OnyxLion
          </p>
          
        </div>
      </div>
    </div>
  );
}
