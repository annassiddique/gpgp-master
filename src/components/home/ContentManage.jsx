import MyLink from "../base/MyLink";

// This component handles and renders the content passed as props
const ContentManage = ({ contents }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            {contents.map((content) => (
              <>
                 {/* Desktop-view */}
                  <div
                        key={content.id}
                        className={`sm:flex hidden justify-center items-center py-10 w-full m-5 flex-col sm:px-10
                                    ${content.ImgPos === 'left' ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                    >
                        <div className="sm:w-[50%] w-full flex items-center sm:justify-start justify-center">
                            <img
                                src={content.Img}
                                alt={`img${content.id}`}
                                className="object-cover shadow-sm shadow-black w-[70%]"
                            />
                        </div>

                        <div className={`sm:w-[50%] flex flex-col sm:justify-start justify-center sm:text-left text-center`}>
                            <h1 className="text-2xl font-semibold">
                                {content.name}
                        </h1>
                            <p className="mt-9 tracking-[1px] leading-8 sm:text-base text-xs font-medium whitespace-pre-line">
                                {content.description}
                            </p>

                            <MyLink 
                                className="uppercase py-2 mt-[62px] items-center sm:w-56 w-36 mx-auto h-16 ml-0 text-base"
                                to={content.Btn.link}
                            >
                            {content.Btn.name}
                            </MyLink>
                        </div>
                  </div>

                 {/* Mobile-view */}
                 <div
                    key={`${content.id}-${content.name}`}
                    className={`sm:hidden flex flex-col justify-center items-center py-10 px-5 w-full
                              ${content.ImgPos !== 'left' && "bg-gpgp-blue text-white"}`}
                 >
                    <h1 className="text-xl font-semibold py-5 uppercase">
                        {content.name}
                   </h1>

                    <img
                        src={content.Img}
                        alt={`img${content.id}`}
                        className="object-cover shadow-sm shadow-black w-56"
                     />
                    <p className="mt-9 text-center leading-8 text-sm font-medium whitespace-pre-line">
                        {content.description}
                    </p>

                    <div className="mt-[60px]">
                        <MyLink 
                           className={`"uppercase py-2 w-36 mx-auto h-16 ml-0 text-base
                                       ${content.ImgPos === 'left' && "bg-gpgp-blue text-white hover:text-white/90"}`}

                            to={content.Btn.link}
                         >
                       {content.Btn.name}
                       </MyLink>
                    </div>
                </div>
              </>
            ))}
        </div>
    );
}

export default ContentManage;