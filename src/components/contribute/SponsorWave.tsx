import React from "react";

export default function SponsorWave() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1476"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_77_501)">
          <path
            d="M1440 1476L1440 7.63691e-06C1118 225 1243.5 438.262 700.5 171.5C427.524 37.3942 90.9998 361.379 0.000181444 438.262L0.000180117 1476L1440 1476Z"
            fill="#0A2471"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_77_501"
            x="0"
            y="0"
            width="1440"
            height="1480"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="34" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_77_501"
            />
          </filter>
        </defs>
      </svg>
      <div className=" mt-[-4px] sm:min-h-[530px]  min-h-[537px]  bg-gpgp-blue "></div>
    </>
  );
}
