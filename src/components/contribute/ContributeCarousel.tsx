import React, { useState} from "react";
import MyLink from "../base/MyLink";
import ContributeWave from "./ContributeWave";
import SponsorWave from "./SponsorWave";
import invitationImage from "../../assets/images/invitationTile.png";
import InvitationCarouselDotActive from "../../assets/images/InvitationCarouselDotActive.png";
import InvitationCarouselDot from "../../assets/images/InvitationCarouselDot.png";


const ContributeCarousel = () => {
  const Invitation = [
    {
      heading: "INVITATION FOR ARTISTS",
      SectionBG: <ContributeWave />,
      description: {
        head: `Calling All Artists Submit Your Work`,
        body: `Are you an artist passionate about environmental conservation and sustainable living? We invite you to submit your artwork, whether it's paintings, sculptures, photographs, or any other medium, to be featured in our awareness campaigns and fundraising initiatives. Your creativity can help us inspire change and bring attention to this critical cause.`,
      },
      Img: invitationImage,
      Btn: {
        heading: "Submit Your Work",
        link: "/contribute/inviteArtist",
      },
    },
    {
      heading: "INVITATION FOR SPONSORS",
      SectionBG: <SponsorWave />,
      description: {
        head: `Do you believe in the power of art and innovation to drive environmental change?`,
        body: `If you're an investor who wants to support a project with a significant ecological and social impact, we encourage you to apply to become a vital partner in the GPGP Art Project. Your investment will help us clean up and prevent further pollution in the Great Pacific Garbage Patch. Join us in fostering a cleaner, healthier ocean ecosystem and a more sustainable future.`,
      },
      Img: invitationImage,
      Btn: {
        heading: "Become a Sponsor",
        link: "/contribute/inviteSponsor",
      },
    },
  ];

  const [showContribute, setShowContribute] = useState(true);
  const [DotTracker1, setDotTracker1] = useState(InvitationCarouselDotActive);
  const [DotTracker2, setDotTracker2] = useState(InvitationCarouselDot);
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);

// This tracks and changes wave pattern accordingly
  const handleWaveChange = () => {
    setShowContribute(!showContribute);
  };


//   These Functions handle the dot disable.able functionality
  const handleButtonClick1 = () => {
    setButton1Disabled(true); // Disable the first button
    setButton2Disabled(false); // Disable the second button
  };

  const handleButtonClick2 = () => {
      setButton1Disabled(false); // Disable the first button
      setButton2Disabled(true); // Disable the second button
    };
    
    return (
        <div className="relative  min-h-[906px]  xxsm:min-h-[850px]  xsm:min-h-[940px] sm:min-h-[1192px] md:min-h-[1360px] lg:min-h-[1652px] xl:min-h-[1700px] overflow-hidden">
      <div className="w-full h-full relative">



        {/* Aritist Section */}
        {/* This Section gets content from Invitation array on [0] */}
        <div
          className={`w-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <ContributeWave  />

          <div className="absolute top-[120px]  xxsm:top-[150px] xsm:top-[240px] sm:top-[370px] md:top-[440px] lg:top-[580px]  xl:top-[690px] left-0  text-white min-h-150px w-full p-5 ">
           
            <div className="flex flex-col items-center">
           
              <h1 className="text-[1.5rem] mb-0 xl:text-[2.3rem] xl:mb-9 lg:text-[2rem] lg:mb-8 md:text-[1.7rem] uppercase text-white font-be-vietnam text-center tracking-wide">
                {Invitation[0].heading}
              </h1>

              <img src={Invitation[0].Img} alt="gpgpTile" className="p-7" />

              <div className="flex flex-row">
           
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                  }}
                  disabled={button1Disabled}
                  className="mr-2"
                >
           
                  <img src={DotTracker1} alt="0" />
           
                </button>
           
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker2(InvitationCarouselDotActive);
                    setDotTracker1(InvitationCarouselDot);
                    handleButtonClick2();
                  }}
                  disabled={button2Disabled}
                >
                  <img src={DotTracker2} alt="0" />
           
                </button>
           
              </div>

              <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
                <h3 className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-semibold mb-2">
                  {Invitation[0].description.head}
                </h3>

                <p className="text-center text-[0.8rem] md:text-[1rem] w-[90%] xl:w-[70%] lg:w-[75%] md:w-[82%] sm:w-[86%] mt-5 md:mt-12">
                  {Invitation[0].description.body}
                </p>

                <MyLink
                  to={Invitation[0].Btn.link}
                  className={`flex items-center text-gpgp-blue mt-4 w-[170px] xsm:w-[300px] h-[50px] text-[0.8rem] xsm:text-[1.3rem] py-2 bg-white uppercase xsm:mt-16`}
                >
                  {Invitation[0].Btn.heading}
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponosr Section  */}
      {/* This Section gets content from Invitation array on [1] */}

      <div className="w-full h-screen absolute top-0">
        <div
          className={`w-full absolute top-0 transition-transform transform ${
            showContribute ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <SponsorWave  />

          <div className="absolute top-[120px]  xxsm:top-[150px] xsm:top-[240px] sm:top-[370px] md:top-[400px] lg:top-[540px]  xl:top-[650px] left-0  text-white min-h-150px w-full p-5 ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.5rem] mb-0 xl:text-[2.3rem] xl:mb-9 lg:text-[2rem] lg:mb-8 md:text-[1.7rem] text-white font-be-vietnam text-center tracking-wide">
                {Invitation[1].heading}
              </h1>

              <img src={Invitation[1].Img} alt="gpgpTile" className="p-7" />

              <div className="flex flex-row">
                <button
                  onClick={() => {
                    handleWaveChange();
                    setDotTracker1(InvitationCarouselDotActive);
                    setDotTracker2(InvitationCarouselDot);
                    handleButtonClick1();
                }}
                disabled={button1Disabled}
                className="mr-2"
                >
                  <img src={DotTracker1} alt="0" />
                </button>
                <button
                  onClick={() => {
                      handleWaveChange();
                      setDotTracker2(InvitationCarouselDotActive);
                      setDotTracker1(InvitationCarouselDot);
                      handleButtonClick2();
                  }}
                  disabled={button2Disabled}
                >
                  <img src={DotTracker2} alt="0" />
                </button>
              </div>

              <div className="text-center flex flex-col items-center mt-4 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-white w-[95%] xl:w-[50%] lg:w-[69%] md:w-[75%]">
                <h3 className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-semibold mb-2">
                  {Invitation[1].description.head}
                </h3>

                <p className="text-center text-[0.8rem] md:text-[1rem] w-[90%] xl:w-[70%] lg:w-[75%] md:w-[82%] sm:w-[86%] mt-5 md:mt-12">
                  {Invitation[1].description.body}
                </p>

                <MyLink
                  to={Invitation[1].Btn.link}
                  className={`flex items-center text-gpgp-blue mt-4 w-[170px] xsm:w-[300px] h-[50px] text-[0.8rem] xsm:text-[1.3rem] py-2 bg-white uppercase xsm:mt-16`}
                >
                  {Invitation[1].Btn.heading}
                </MyLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeCarousel;
