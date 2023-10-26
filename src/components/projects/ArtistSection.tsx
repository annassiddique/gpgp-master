import JD from "../../assets/images/john-dahlsen.png";
import Artist from './../home/Artist';

const ArtistSection = () => {
  return (
    <>
      <div className="hidden md:block bg-gpgp-blue md:bg-[white]">
        <h1 className="text-center pt-[40px] md:pt-[0px] font-[600] lg:font-[600] md:font-[600] lg:text-[40px] lg:leading-[48px] lg:mt-[100.5px]">
          The Artist
        </h1>
        <div className="w-[100%] md:h-[481px] grid md:grid-cols-2 mt-[15px] md:mt-[90px] md:border-y-[1px] md:border-black">
          <div className="md:ml-[66px] h-[100%] md:w-[578px] relative">
            <svg
              viewBox="0 0 538 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute mx-auto w-[520px] h-[538px] left-[30px] rounded-tl-[40px] rounded-tr-[40px] mt-[-41px] hidden md:block"
            >
              <path
                d="M498 -1.74846e-06C520.091 -7.82811e-07 538 17.9086 538 40L538 520L-2.27299e-05 520L-1.74846e-06 40C-7.8281e-07 17.9086 17.9086 -2.27339e-05 40 -2.17683e-05L498 -1.74846e-06Z"
                fill="#0A2471"
              />
            </svg>
            <div>
              <img src={JD} alt={JD} className="md:absolute bottom-[0px]" />
            </div>
          </div>

          <div className="py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <p className="text-white md:text-[black] text-center md:text-left text-[11px] md:text-[16px] hidden md:block">
              <b>Dr. John Dahlsen</b> stands as a globally recognised figure in
              the realm of environmental artistry and scholarly authorship.
            </p>

            <p className="text-justified hidden md:block">
              His accolades encompass prestigious distinctions such as the 2000
              Wynne Prize. His artistic oeuvre prominently revolves around the
              thematic resonance of oceanic detritus, particularly plastic
              waste.
            </p>

            <p className="hidden md:block">
              Through adroitly controlling discarded marine materials, John
              Dahlsen crafts visually captivating compositions imbued with
              profound commentary on the pervasive concern of plastic pollution,
              invoking notions of equilibrium and harmony.
            </p>
            <p className="block md:hidden text-white md:text-[black] text-center md:text-left text-[11px] md:text-[16px]">
              Dr. John Dahlsen is an internationally renowned environmental
              artist and author. His art features ocean debris, specifically
              plastic waste he uses the ocean debris to create visually stunning
              compositions evoking harmony and balance on the plastic pollution.
            </p>
            <div className="hidden md:block w-[260px] h-[100px] bg-gpgp-blue rotate-90 absolute right-[-160px] mt-[100px] rounded-[40px]"></div>

          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Artist/>
      </div>
      
    </>
  );
};

export default ArtistSection;
