import SeaSeal from "../../assets/images/ai-generated-realistic-pictures-seals.jpg";
import MyLink from "../base/MyLink";

const JoinUs = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center pt-[30px] text-[16px] leading-[48px] uppercase font-[600] md:font-[600] md:text-[40px] md:leading-[48px] md:mt-[100.5px]">
          Join Us
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="w-[100%] order-2 md:order-1 md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
          <div className="hidden md:block w-[260px] h-[100px] bg-gpgp-blue rotate-90 absolute left-[-160px] mt-[100px] rounded-[40px]"></div>

            <p className="hidden md:block text-justified">
              <b>The Great Pacific Garbage Patch</b> presents a distinctive
              platform for the expression of artistic endeavours, serving as a
              medium to not only manifest creativity but also underscore the
              paramount importance of ecological custodianship.
            </p>

            <p className="hidden md:block text-justified">
              <b>We invite artists of all disciplines</b>, including painters,
              sculptors, photographers, and mixed media practitioners, to submit
              a maximum of three artistic pieces for consideration.
            </p>

            <p className="hidden md:block md:font-[600px] md:leading-[48px]">
              Join us and contribute to the global effort!
            </p>

            <p className="text-center md:text-left text-[12px] md:text-[16px] block md:hidden">
              The Great Pacific Garbage Patch offers a unique opportunity to
              channel your artistic talents towards a project.
            </p>

            <div className="flex flex-row gap-[16px] md:gap-[38px] md:justify-start justify-center">
              <MyLink
                to=""
                className="uppercase mb-[48.62px] md:mb-[0px] px-[17px] py-[11px] md:bg-white text-[12px] md:text-[16px] md:text-gpgp-blue md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base"
              >
                Submit <span className="hidden md:block">Work</span>
              </MyLink>
              <MyLink
                to=""
                className="uppercase mb-[48.62px] md:mb-[0px] bg-gpgp-blue px-[17px] py-[11px] text-white text-[12px] md:text-[16px] md:w-56 tracking-[3.3px] md:h-16 md:tracking-[.35em] text-base"
              >
                Invest
              </MyLink>
            </div>

            
          </div>
          <div className="h-[200px] w-[250px] md:w-[100%] mx-auto md:mx-0 md:h-[100%] order-1 md:order-2 mb-[30px] md:mb-0">
            <img className="w-[100%] h-[100%]" src={SeaSeal} alt="Sea Seal"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
