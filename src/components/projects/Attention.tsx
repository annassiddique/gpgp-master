import SaveOceanCampaignImage from "../../assets/images/save-ocean-campaign-plastic-bag-sinking-ocean-remix-media 1.png";

const Attention = () => {
  return (
    <>
      <div className="bg-gpgp-blue md:bg-[white]">
        <h1 className="text-center text-[white] md:text-[black] pt-[40px] md:pt-[0px] font-[600] font-[600] md:text-[40px] md:leading-[48px] md:mt-[100.5px]">
          Why does it need attention?
        </h1>
        <div className="w-[100%] grid md:grid-cols-2 mt-[15px] md:mt-[70px] md:border-y-[1px] md:border-black">
          <div className="order-1 h-[200px] w-[250px] mx-auto md:mx-0 md:w-[100%] md:h-[100%]">
            <img className="w-[100%] max-h-[100%]" src={SaveOceanCampaignImage} alt={"Save the ocean campaign"}/>
          </div>
          <div className="w-[100%] order-2 md:order-1 md:py-[60px] px-[40px] md:px-[80px] flex flex-col gap-y-6">
            <p className="text-white md:text-[black] text-center md:text-left text-[11px] md:text-[16px]">
              The Great Pacific Garbage Patch is a pressing environmental issue
              that requires immediate attention. It has already caused
              significant harm to marine life and the ecosystem, and its impact
              will only worsen if we do nothing.
            </p>
            <p className="hidden md:block text-justified">
              The research conducted by oceanographers and ecologists suggests
              that a significant proportion of the marine debris, approximately
              70%, sinks to the ocean's bottom.{" "}
              <b>This makes the case of the GPGP even more alarming</b>.
            </p>
            <p className="mb-[25px] md:mb-[0px] text-white md:text-[black] text-center md:text-left text-[11px] md:text-[16px]">
              It's time to take responsibility for our actions and work towards
              a sustainable future.
            </p>
            <div className="hidden md:block w-[260px] h-[100px] bg-gpgp-blue rotate-90 absolute right-[-160px] mt-[100px] rounded-[40px]"></div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Attention;
