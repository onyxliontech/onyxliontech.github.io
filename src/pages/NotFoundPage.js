/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';

import Button from 'elements/Button';

import NotFound from 'assets/images/Notfound.jpg';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="flex flex-col w-full h-screen justify-center">
        <div className="flex justify-center">
          <Button href="/" type="link" className="flex w-30 h-10 px-5 mt-5 bg-gray-600 text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
            Go Back
          </Button>
        </div>
        <br />
        <div className="flex w-full justify-center">
          <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12" />
        </div>
        <div className="flex justify-center text-sm"><a href="https://www.vecteezy.com/free-vector/404">404 Vectors by Vecteezy</a></div>
        <h1 className="text-center text-2xl mt-5">
          Please visit the right pages
        </h1>
        
      </div>
    );
  }
}
