import { useParams } from "react-router-dom";
import Tabs from "../shared/Tabs";
import { useState } from "react"
import Pagination from "../shared/Pagination";
import { NewsCard } from "./NewsCard";

const categories = [
   {
       title: "GPGP news",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "Plastic pollution",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "ENVIRonmental art",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
       title: "Events",
       description: "The Tide of Plastic A Growing Threat"
   },
   {
    title: "Test",
    description: "The Tide of Plastic A Growing Threat"
   },
];

const NewsCategoryList = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(params.categoryId!);
  const fakeData = new Array(12).fill(1);

  // Get the category of items
  const tabCategories: string[] = [];
  categories.map(item => tabCategories.push(item.title.toUpperCase()));

  const handleCategoryChange = (category: string) => {
      setCurrentCategory(category);
      setCurrentPage(1)
  };

    // Pagination
    const itemsPerPage = 1; 
    const totalItems = categories.length;
    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen w-full">
        <Tabs
             items={[...tabCategories]} 
             currentCategory={currentCategory}
             onCategoryChange={handleCategoryChange}
             redirectTo
             showAllLabel={false}
         />
      <div className="w-full flex flex-col p-5">
         <h2 className="font-semibold text-lg uppercase py-5">
             {params.categoryId}
         </h2>
         <div className="group relative py-10 shadow-md">
            <img
                  src={require("../../assets/images/news/main-news.png")}
                  alt=""
                  className="w-full h-[400px] rounded-sm"
            />
            <span className="absolute bottom-10 text-[1.5rem] drop-shadow-sm font-semibold text-white p-2 z-50">
                  The Tide of Plastic: A Growing Threat  The Tide of Plastic: A Growing Threat 
            </span>
         </div>
         <div className="grid grid-cols-3 gap-5">
             {fakeData.map(item => (
                 <NewsCard
                     title="The Tide of Plastic: A Growing Threat"
                     href={`/news/${params.categoryId}`}
                     imageUrl="news.png"
                  />
              ))}
         </div>

         {totalItems > itemsPerPage &&  (
            <div className="flex justify-center max-w-screen-xl m-auto py-5">
               <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
               />
            </div>
        )}
      </div>
    </div>
    )
}

export default NewsCategoryList;