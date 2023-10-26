import NftCarousel from "../NftCarousel";
import MyLink from "../base/MyLink";

const About = () => {
  return (
    <>
      <div className="h-[413px] w-[100%] bg-project-page-mobile-wave md:bg-project-page-wave bg-no-repeat bg-cover md:h-[1208.5px] md:pt-[395px]">
        <div className="flex flex-col items-center text-white">
          <h1 className="mt-[80px] md:mt-[30px] text-[16px] uppercase md:text-[40px] font-[600] leading-[23.38px] md:leading-[48px]">
            About the Project
          </h1>
          <p className="mt-[10px] md:mt-[25px] text-[12px] text-center md:text-[17px] leading-[21px] md:leading-[32px] font-[400] sm:text-[1rem] sm:w-[50%] w-[80%]">
            The GPGP project represents a collaborative endeavour between
            InfinArt and the esteemed environmental artist John Dahlsen. It
            serves as an innovative exhibition with the primary objective of
            fostering heightened awareness concerning plastic pollution, with a
            specific focus on the Great Pacific Garbage Patch. This pioneering
            initiative uniquely melds artistic expression, educational outreach,
            and community engagement to provide a groundbreaking experience that
            effectively confronts the urgent environmental concern at hand.
          </p>
        </div>

        <div className="hidden md:block mt-[35px]">
          <NftCarousel />
          <div className="mt-[85px] flex flex-col items-center">
            <MyLink
              to=""
              className="uppercase w-56 h-16 tracking-[.35em] text-base"
            >
              See all
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
