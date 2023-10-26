import Pagination from "../shared/Pagination";
import Tabs from "../shared/Tabs";
import LatestNews from "./LatestNews";
import NewsCategory from "./NewsCategory";
import { useState } from "react"

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

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("All");

  const itemsPerPage = 1; 
  let items = categories ?? [];

  // Get the category of items
  const tabCategories: string[] = [];
  categories.map((item) => tabCategories.push(item.title.toUpperCase()));

  const handleCategoryChange = (category: string) => {
        setCurrentCategory(category);
        setCurrentPage(1)
  };

  // Filter the data
  items = currentCategory !== "All" 
                          ? items.filter((item) => item.title.toLowerCase() === currentCategory.toLowerCase())
                          : items;

  // Pagination
  const totalItems = items.length;
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="min-h-screen w-full">
        <Tabs
             items={[...tabCategories]} 
             currentCategory={currentCategory}
             onCategoryChange={handleCategoryChange}
         />
        <LatestNews/>
        {items.map((category, index) => (
                <NewsCategory 
                      key={index}
                      category={category} 
                />
        ))}

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
  )
}
export default NewsList;
