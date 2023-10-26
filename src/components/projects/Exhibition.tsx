import Rectange251 from "../../assets/images/Rectangle251.jpg";
import MyLink from "../base/MyLink";

const Exhibition = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center pt-[30px] md:pt-[0px] font-[600] lg:font-[600] md:font-[600] lg:text-[40px] lg:leading-[48px] lg:mt-[100.5px]">
          Exhibition
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="w-[100%] order-2 md:order-1 md:pt-[60px] md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
          <div className="hidden md:block w-[260px] h-[100px] bg-gpgp-blue rotate-90 absolute left-[-160px] mt-[100px] rounded-[40px]"></div>

            <p className="md:text-[black] text-center md:text-left text-[12px] md:text-[16px]">
              <b>The GPGP exhibition</b> comprises 2,450 physical art pieces,
              thoughtfully organised to replicate the satellite depiction of the
              Great Pacific Garbage Patch. <span className="hidden md:block">Within this presentation, 888 of
              these physical art pieces, referred to as 'tiles,' collectively
              constitute the central element of the Garbage Patch's satellite
              representation.</span>
            </p>
            <p className="text-center block md:hidden text-[12px] md:text-[16px]">
              Within this presentation, 888 of these physical art pieces,
              referred to as 'tiles,' collectively constitute the central
              element of the Garbage Patch's satellite representation.
            </p>
            <p className="hidden md:block text-justified">
              Each tile embodies a unique artistic expression, serving as a
              poignant and evocative symbol of the expansive scope and critical
              implications associated with plastic pollution.
            </p>
            <MyLink
              to=""
              className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] md:bg-white text-white text-[12px] md:text-[16px] md:text-gpgp-blue md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base mx-auto md:mx-0"
            >
              Explore
            </MyLink>
          </div>
          <div className="h-[200px] w-[250px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:order-2 mb-[15px] md:mb-0">
            <img className="w-[100%] max-h-[100%]" alt="Exhibition" src={Rectange251}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
