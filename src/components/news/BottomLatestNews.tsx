import BackgroundWave from "../BackgroundWave";
import Container from "../Container";
import { NewsCard } from "./NewsCard";
const fakeData = new Array(3).fill(1);

const BottomLatestNews = () => {
      return ( 
          <>
           <div className="sm:pt-0 pt-20">
               <BackgroundWave/>
           </div>

           <Container sectionClass="bg-gpgp-blue" classes="bg-gpgp-blue">
           <div className="w-full flex flex-col p-5">
                  <h2 className="font-semibold text-lg uppercase py-5 text-white">
                     Latest News
                  </h2>
                  <div className="grid grid-cols-3 gap-10">
                     {fakeData.map(item => (
                           <NewsCard
                                 title="The Tide of Plastic: A Growing Threat"
                                 href={`/news/${item.id}`}
                                 imageUrl="news/latest-news.png"
                                 classes="text-white"
                              />
                     ))}
                  </div>
             </div>
           </Container>
        </>
       );
  }
   
  export default BottomLatestNews;