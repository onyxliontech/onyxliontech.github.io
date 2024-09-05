/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import Button from '../elements/Button';
import Logo from '../assets/images/logo/OnyxLionLogo.png';

export default function BrandIcon() {
  return (
    <Button
      className="justify-self-center"
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl font-medium ">
      <img
        src={Logo}
        alt="OnyxLion"
        className="w-40 md:w-60 h-24 object-contain"
      />
      </p>
    </Button>
  );
}
