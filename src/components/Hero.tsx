import MyLink from './base/MyLink';

const Hero = () => {
    return (
        <>
            <div className="sm:flex hidden w-full bg-hero-back bg-no-repeat bg-right lg:bg-[length:880px_600px] sm:bg-[length:500px_600px] m-0 p-0">
                    <div className="flex flex-col justify-center items-start uppercase xl:px-0 sm:px-5 h-[500px]">
                        <h1 className="md:text-[1.2rem] text-[1rem] font-semibold">The great pacific garbage patch art project</h1>
                        <h2 className="text-[1rem] font-semibold py-1">Enviromental artist john dahlsen & infinart</h2>
                        <h4 className="text-[1rem] font-semibold mt-20">The art inspiring global action</h4>
                        <div className="w-full flex justify-start gap-x-2 py-5 mt-20">
                            <MyLink to="" className="uppercase py-2 w-44">gallery</MyLink>
                            <MyLink to="" className="uppercase py-2 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue w-44">join us</MyLink>
                        </div>
                    </div>
            </div>

            <div className="sm:hidden flex flex-col justify-center items-center px-10 uppercase">
                        <h1 className="text-[1rem] font-semibold pt-10">The great pacific garbage patch art project</h1>
                        <h2 className="text-[0.9rem] py-1">John Dahlsen & InfinArt</h2>
                        <img
                            src={require("../assets/images/gpgp-map-mobile.png")}
                            alt="gpgp map"
                            className="object-center py-5"
                        />
                        <h4 className="text-[0.9rem] font-semibold text-center mt-10">The art <br/> inspiring global action</h4>
                        <div className="w-full flex justify-center gap-x-2 py-5">
                            <MyLink to="" className="uppercase py-2 w-48">gallery</MyLink>
                            <MyLink to="" className="uppercase py-2 bg-gpgp-blue text-white hover:bg-white hover:text-gpgp-blue w-48">join us</MyLink>
                        </div>
            </div>
       </>

    )
}

export default Hero;
