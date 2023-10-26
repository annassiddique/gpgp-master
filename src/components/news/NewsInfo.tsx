import { HiOutlineClock, HiOutlineShare } from "react-icons/hi";
import MyLink from "../base/MyLink";

const NewsInfo = () => {
  return (
    <div className="w-full flex justify-center sm:p-9 md:p-10 p-5">
       <div className="grid sm:grid-cols-4 grid-cols-1 gap-x-5">
          <div className="col-span-3">
              <h1 className="sm:text-[1.4rem] text-lg font-bold tracking-[.25em]">
                  Predatory Tides: Confronting Plastic’s <br/>
                  Threat to Whales and Dolphins
               </h1>

               <div className="flex items-center space-x-2 py-5">
                    <HiOutlineClock className="w-5 h-5"/>
                    <span>5 minutes</span>
                    <HiOutlineShare className="w-4 h-4 ml-3"/>
               </div>

               <img
                     src={require("../../assets/images/news/main-news.png")}
                     alt=""
                     className=""
               />

               <p className="space-x-10 py-10">
                 Humans have come to treasure dolphins and whales due to their high intelligence, beauty, and grace. <br/><br/>
                 However, they are also critical for marine species. They act as indicators, providing valuable information about the health of oceans. Whales are especially crucial for fighting climate change as in their lifetime various species can capture as much carbon as 1000 trees.<br/> <br/>
                 These mammals used to only have a few predators – mainly humans, other whales/dolphins, and sharks, however, recently a much less visible predator has emerged. This predator can be as small as a nanometre –plastic.
               </p>

               <div className="sm:text-xl text-lg py-5 font-bold">Topics</div>
               <div className="flex items-center space-x-2">
                  <MyLink to="" className="uppercase py-2 w-44 rounded-lg">GPGP</MyLink>
                  <MyLink to="" className="uppercase py-2 w-44 rounded-lg">Plastic pollution</MyLink>
               </div>
          </div>

          <div className="col-span-1">
               <h2 className="sm:text-[1.3rem] text-base sm:pt-0 pt-20 font-semibold py-5">
                 More News
               </h2>

               <div className="sm:space-y-5 grid sm:grid-cols-1 grid-cols-2 gap-5">
                    <div className="group relative shadow-md">
                        <img
                            src={require("../../assets/images/news/news1.jpg")}
                            alt=""
                            className="w-full sm:h-56 h-44 rounded-sm"
                        />
                        <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                            The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                        </span>
                    </div>

                     <div className="group relative shadow-md">
                        <img
                            src={require("../../assets/images/news/news2.png")}
                            alt=""
                            className="w-full sm:h-56 h-44 rounded-sm"
                        />
                        <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                            The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                        </span>
                    </div>

                    <div className="group relative shadow-md">
                        <img
                            src={require("../../assets/images/news/news3.jpg")}
                            alt=""
                            className="w-full sm:h-56 h-44 rounded-sm"
                        />
                        <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                            The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                        </span>
                    </div>

                    <div className="group relative shadow-md">
                        <img
                            src={require("../../assets/images/news/news4.jpg")}
                            alt=""
                            className="w-full sm:h-56 h-44 rounded-sm"
                        />
                        <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                            The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                        </span>
                    </div>
               </div>
          </div>
       </div>
    </div>
  )
}
export default NewsInfo;

