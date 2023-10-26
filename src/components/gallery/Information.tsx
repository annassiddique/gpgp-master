const Information = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-project-page-mobile-wave md:bg-project-page-wave bg-no-repeat bg-cover md:h-[1000px] md:pt-[10px]">
        <div className="flex flex-col items-center text-white md:pt-[500px] pt-20">
          <h1 className="mt-[80px] text-[1rem] uppercase md:text-[1.5rem] font-[600] leading-[23px] md:leading-[48px]">
              The Great Pacific Garbage Patch Art Project 
          </h1>
          <p className="text-[1rem] text-center leading-[21px] md:leading-[32px] sm:w-[50%] w-[80%]">
            comprises 2450 tiles, representing a recent satellite image <br/>
            of the Great Pacific Garbage Patch and draws attention to the issue of <br/>
            plastic litter  in the oceans, particularly the major garbage patches.
          </p>
        </div>
     </div>
    </>
  );
};

export default Information;
