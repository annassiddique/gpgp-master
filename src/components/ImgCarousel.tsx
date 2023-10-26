import Carousel from '@itseasy21/react-elastic-carousel';

interface ImgCarouselProps {
    items: {
        imageSrc: string,
    }[]
}

const ImgCarousel = ({items}: ImgCarouselProps) => {
    return (
        <Carousel
            isRTL={false}
            itemsToShow={5.5}
            showArrows={false} // Hide arrows
            pagination={false} // Hide dots
            enableAutoPlay={true} // Enable auto-play
            autoPlaySpeed={100} // Set auto-play speed (in milliseconds)
            className="carousel"
         >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="product-image hover:shadow-black shadow-[2px_3px_5px_rgba(0,0,0,0.3)]"
                >
                  <img 
                      src={item.imageSrc}
                      alt={`Product ${index + 1}`}
                  />
              </div>
            ))}
        </Carousel>
    );
};

export default ImgCarousel;