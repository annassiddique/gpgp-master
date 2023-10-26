import React from "react";

interface ContributeHeroProps {
  HeroContent: {
    heading: string;
    subheading?: string;
    HeroLegend?: string[];
  };
  classes: {
    container?: string;
    image?: string;
    heading?: string;
    subheading?: string;
    paragraph?: string;
  };
}

export default function ContributeHero({
  HeroContent,
  classes: {
    container = "",
    image = "",
    heading = "",
    subheading = "",
    paragraph = "",
  },
}: ContributeHeroProps) {
  return (
    <div
      className={`w-[100%] flex justify-center items-center px-8 py-28 sm:p-16 relative mb-[-150px] ${container}`}
    >
      <div
        className={`flex flex-col justify-center items-center text-center w-[80%] min-h-[500px]`}
      >
        <img
          src={require("../../assets/images/contributeHero.png")}
          alt="GPGP-map"
          className={`absolute p-16 filter blur-sm  ${image}`}
        />

        <h1
          className={`z-2 md:z-10 opacity-100 font-be-vietnam font-bold text-[1.7rem] xsm:text-[2.4rem] uppercase ${heading}`}
        >
          {HeroContent.heading}
        </h1>
        {HeroContent.subheading ? (
          <h3
            className={`text-[1rem] xsm:text-[1.3rem] font-be-vietnam font-bold mb-2 sm:mb-5 z-2 md:z-10 opacity-100 ${subheading} `}
          >
            {HeroContent.subheading}
          </h3>
        ) : (
          ""
        )}

        {HeroContent.HeroLegend
          ? HeroContent.HeroLegend.map((item, index) => (
              <p
                className={`text-[0.8rem] w-[150%] sm:text-[1.2rem] xsm:w-[120%] sm:w-[75%] font-be-vietnam mb-3 tracking-normal sm:tracking-wide z-8 md:z-10 opacity-100 ${paragraph}`}
                key={index}
              >
                {item}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
