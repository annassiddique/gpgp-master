import MyLink from '../base/MyLink'

const Artist = ({...props}) => {
  return (
    <div  className="flex flex-col justify-center items-center py-10 px-5 w-full sm:w-[500px] sm:bg-white bg-gpgp-blue sm:text-black text-white">
        <div className="bg-artist-back bg-no-repeat w-[300px] h-[300px] bg-[length:300px_300px] rounded-full p-12">
            <div className="bg-white rounded-full w-full p-3">
                    <img
                        src={require("../../assets/images/john-dahlsen.png")}
                        alt="Dr John Dahlsen"
                        className="w-44 h-44 rounded-[50%]"
                    />
              </div>
        </div>

         <h1 className="text-xl font-semibold py-3 uppercase">
        John Dahlsen
         </h1>
       
         <span className="text-base tracking-[1px] font-semibold py-1 uppercase">
        The Artist
         </span>

        <p className="mt-9 text-center leading-8 sm:text-base text-sm font-medium whitespace-pre-line">
            Dr. John Dahlsen is an internationally renowned environmental artist and author. His art features ocean debris, specifically plastic waste he uses the ocean debris to create visually stunning compositions evoking harmony and balance on the plastic pollution.
        </p>

        <div className="mt-12">
            <MyLink 
                className="uppercase py-2 w-44 mx-auto h-12 ml-0 text-base sm:bg-gpgp-blue bg-white sm:text-white text-gpgp-blue sm:hover:text-white/80 hover:text-gpgp-blue"                 
                to="#"
             >
              Find out more
            </MyLink>
        </div>
   </div>
  )
}

export default Artist;