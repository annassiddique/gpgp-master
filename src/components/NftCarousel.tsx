import exhibitionImg1 from "../assets/images/exhibition-1.png"
import exhibitionImg2 from "../assets/images/exhibition-2.png"
import exhibitionImg3 from "../assets/images/exhibition-3.png"
import exhibitionImg4 from "../assets/images/exhibition-4.png"
import exhibitionImg5 from "../assets/images/exhibition-5.png"
import ImgCarousel from './ImgCarousel'

const images = [
  {
    imageSrc: exhibitionImg1,
  },
  {
    imageSrc: exhibitionImg2,
  },
  {
    imageSrc: exhibitionImg3,
  },
  {
    imageSrc: exhibitionImg4,
  },
  {
    imageSrc: exhibitionImg5,
  },
  {
    imageSrc: exhibitionImg4,
  },
  {
    imageSrc: exhibitionImg3,
  },
  {
    imageSrc: exhibitionImg1,
  },
  // Add more images here as needed
];

const NftCarousel = () => {
  return (
    <div className="w-[100%] flex justify-between">
         <ImgCarousel items={images} />
     </div>
  )
}

export default NftCarousel;
