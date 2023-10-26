import { HiChevronRight } from "react-icons/hi"
import { Link } from "react-router-dom";
import { NewsCard } from "./NewsCard";

interface NewsCategoryProps {
   category: {
      title: string,
      description: string,      
   }
}

const NewsCategory = ({ category} : NewsCategoryProps) => {
  return (
      <div className="w-full flex flex-col sm:p-9 md:p-10 p-5">
        <div className="flex justify-between items-center pb-5">
           <h2 className="text-[1rem] font-semibold uppercase">
                {category.title}
          </h2>
          <div className="group flex justify-between items-center uppercase hover:text-black/60 hover:cursor-pointer">
            <Link to={`/news/category/${category.title}`}>
               <span className="text-[1rem] font-semibold uppercas">
                 See more
               </span>
            </Link>
             <HiChevronRight className="w-7 h-7"/>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
             {new Array(3).fill(1).map(item => (
                 <NewsCard
                     title={category.title}
                     href={`/news/${category.description}`}
                     imageUrl="news.png"
                  />
              ))}
        </div>
     </div>
  )
}

export default NewsCategory;