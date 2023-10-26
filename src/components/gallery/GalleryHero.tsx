import gpgpMapImage from "../../assets/images/contributeHero.png";

const ProjectHero = () => {
  return (
       <div className="flex flex-col items-center">
           <h1 className="md:text-[1.2rem] text-[1rem] font-semibold uppercase sm:p-0 py-10">
              The Gallery
           </h1>
           <div className="pt-20">
              <img
                  src={gpgpMapImage}
                  alt={"GPGP Map"}
                  className="sm:w-[800px] w-[350px] sm:h-[500px] h-[200px] mx-auto"
              />
           </div>
          <p className="md:text-[1.1rem] text-[1rem] py-10 font-semibold uppercase">
              The art inspiring global action
          </p>
        </div>
  );
};

export default ProjectHero;
