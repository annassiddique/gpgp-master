const LatestNews = () => {
  return (
    <div className="w-full flex flex-col sm:p-9 p-5">
         <div className="flex justify-between items-center pb-5">
            <h2 className="font-semibold text-lg uppercase">
                Latest News
            </h2>
          </div>

         <div className="sm:block hidden">
               <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                  <div className="col-span-3 gap-4">
                     <div className="group relative">  
                        <img
                           src={require("../../assets/images/news/news2.png")}
                           alt=""
                           className="w-full h-[470px] shadow-md opacity-95 hover:opacity-90 transition duration-300 ease-in-out"
                        />
                       <span className="absolute bottom-1 text-[1.1rem] drop-shadow-sm font-semibold text-white p-5 z-50">
                           The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                       </span>
                     </div>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                     <div className="group relative">
                        <img
                           src={require("../../assets/images/news/news1.jpg")}
                           alt=""
                           className="w-full h-56 shadow-md"
                           />
                          <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                               The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                          </span>
                     </div>
               
                     <div className="group relative">
                        <img
                           src={require("../../assets/images/news/news3.jpg")}
                           alt=""
                           className="w-full h-56 shadow-md"
                           />
                          <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                               The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                          </span>
                     </div>

                     <div className="group relative">
                        <img
                           src={require("../../assets/images/news/news4.jpg")}
                           alt=""
                           className="w-full h-56 shadow-md"
                           />
                          <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                               The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                          </span>
                     </div>

                     <div className="group relative">
                        <img
                           src={require("../../assets/images/news/news5.jpg")}
                           alt=""
                           className="w-full h-56 shadow-md"
                           />
                          <span className="absolute bottom-0 text-[0.9rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                               The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                          </span>
                     </div>
                  </div>
               </div>
         </div>

         <div className="sm:hidden block">
            <div className="grid grid-cols-3 gap-4">
               <div className="col-span-2 gap-4 space-y-8">
                   <div className="group relative">
                      <img
                        src={require("../../assets/images/news/news2.png")}
                        alt=""
                        className="w-full h-60 shadow-md"
                        />
                       <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-3 z-50">
                           The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                       </span>
                   </div>

                   <div className="group relative">
                      <img
                        src={require("../../assets/images/news/news1.jpg")}
                        alt=""
                        className="w-full h-60 shadow-md"
                         />
                       <span className="absolute bottom-1 text-sm drop-shadow-sm font-semibold text-white p-3 z-50">
                           The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                       </span>
                   </div>
               </div>
               <div className="col-span-1 grid grid-cols-1 gap-4">
                  <div className="group relative">
                    <img
                       src={require("../../assets/images/news/news3.jpg")}
                       alt=""
                       className="w-full h-40 shadow-md"
                    />
                    <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-3 z-50">
                     The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                    </span>
                  </div>

                  <div className="group relative">
                    <img
                       src={require("../../assets/images/news/news4.jpg")}
                       alt=""
                       className="w-full h-40 shadow-md"
                    />
                    <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-3 z-50">
                     The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                    </span>
                  </div>

                  <div className="group relative">
                    <img
                       src={require("../../assets/images/news/news5.jpg")}
                       alt=""
                       className="w-full h-40 shadow-md"
                    />
                    <span className="absolute bottom-0 text-sm drop-shadow-sm font-semibold text-white p-3 z-50">
                     The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
                    </span>
                  </div>
              </div>
            </div>
         </div>
     </div>
  )
}

export default LatestNews;
