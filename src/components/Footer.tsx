import Container from "./Container";
import Logo from "./Logo"
import ContactInfo from "./footer/ContactInfo";
import SocialMedia from "./footer/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gpgp-blue">
       <Container hasSection={false} classes="bg-gpgp-blue flex flex-col">
            <div className="lg:w-full md:w-[75%] sm:w-[90%] w-full mx-auto">
                <hr className="h-px my-8 border-0 bg-white"/>
            </div>

            {/* Desktop-view */}
            <div className="w-full sm:flex sm:flex-col hidden">
                <div className="w-full grid grid-cols-3 justify-between p-5">
                    <Logo className="flex justify-start items-start w-20 h-20"/>
                    <SocialMedia/>
                    <ContactInfo/>
                </div>

                <div className="w-full grid grid-cols-3 justify-between text-white pt-10 pb-3">
                    <div className="text-right font-thin col-span-2 px-5 text-[0.9rem]">
                        2023 JohnDahlsen & Infinart All Rights Reserved - Designed by Risidio
                    </div>
                  
                    <div className="grid grid-cols-2 gap-x-2 text-white font-thin text-[0.9rem]">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                  </div>
            </div>

           {/* Mobile-view */}
            <div className="w-full sm:hidden flex flex-col items-center px-5">
               <div className="w-full grid grid-cols-2 justify-between items-start text-white">
                  <SocialMedia/>
                  <div className="flex flex-col items-end">
                      <ul className="text-sm space-y-4 text-right">
                        <li>Sitemap</li>
                        <li>Project</li>
                        <li>Contribute</li>
                        <li>News</li>
                        <li>Contacts</li>
                      </ul>
                      <Logo className="flex items-start w-16 h-16"/>
                  </div>
              </div>

              <div className="w-full text-center text-white font-thin py-5 text-[0.9rem]">
                   2023 JohnDahlsen & Infinart All Rights Reserved - Designed by Risidio
              </div>
           </div>
       </Container> 
    </footer>
  )
}

export default Footer;
