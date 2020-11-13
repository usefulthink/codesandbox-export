import React from "react";
export default function Superellipse() {
  return (
    <div className="App">
      <svg
        className="superellipse__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="-2 -2 36 36"
      >
        <defs>
          <path
            vectorEffect="non-scaling-stroke"
            d="M2.28,2.28 C4.04333333,0.516666667 8,0 16,0 C24,0 27.9566667,0.516666667 29.72,2.28 C31.4833333,4.04333333 32,8 32,16 C32,24 31.4833333,27.9566667 29.72,29.72 C27.9566667,31.4833333 24,32 16,32 C8,32 4.04333333,31.4833333 2.28,29.72 C0.516666667,27.9566667 0,24 0,16 C0,8 0.516666667,4.04333333 2.28,2.28 Z"
            id="theborder"
          />
          <clipPath id="clip-path">
            <use xlinkHref="#theborder" />
          </clipPath>
          <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <g id="border">
          <use xlinkHref="#theborder" />
        </g>
        <g id="myFill" clipPath="url(#clip-path)">
          <image
            x="0"
            y="0"
            width="32"
            height="32"
            xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142414/xing-profile-placeholder.png"
          />
        </g>
      </svg>
    </div>
  );
}
