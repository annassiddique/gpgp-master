import Container from "../Container"
import HomeExhibition from "./HomeExhibition"
import NftCarousel from "../NftCarousel"
import MyLink from "../base/MyLink"

const Exhibition = () => {
  return (
    <>
    <Container hasSection={false}>
      <div className="flex flex-col items-center bg-gpgp-blue text-white">
        <h1 className="text-bold text-2xl">
           The Exhibition
        </h1>
        <p className="text-center py-10 leading-8 font-normal sm:text-[1rem] text-xs sm:w-[50%] w-[80%]">
          The Great Pacific Garbage Patch (GPGP) environmental art project is a collaboration 
          between environmental artist, John Dahlsen, and InfinArt. The complete artwork
          comprises 2450 tiles, representing a recent satellite image of the Great Pacific
          Garbage Patch and draws attention to the issue of plastic litter in the oceans,
          particularly the major garbage patches.
        </p>
      </div >
    </Container>

    <div className="sm:hidden flex flex-col justify-center items-center py-5">
         <HomeExhibition classes="py-10"/>
         <MyLink to="#" className="uppercase py-2 w-44 h-16 tracking-[.35em] text-[1rem]"> Gallery </MyLink>
    </div>

    <div className="sm:block hidden">
        <NftCarousel/>
        <Container classes="py-28" hasSection={false}>
           <MyLink to="" className="uppercase py-2 w-56 h-16 tracking-[.35em] text-base">See all</MyLink>
         </Container>
    </div>
   </>
 )
}

export default Exhibition