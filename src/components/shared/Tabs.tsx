import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface TabsProps {
   items: string[],
   currentCategory: string;
   onCategoryChange: (category: string) => void;
   redirectTo?: boolean,
   showAllLabel?: boolean
}

const Tabs = ({
     items,
     currentCategory,
     onCategoryChange,
     redirectTo,
     showAllLabel= true }: TabsProps) => {
  const generalStyle = "text-gpgp-blue block px-4 py-1 rounded-lg hover:bg-gray-100 hover:text-black border border-gpgp-blue sm:font-normal text-sm transition"
  const selectedStyle = twMerge(generalStyle, "font-bold bg-gpgp-blue text-white shadow-md");
  return (
        <div className="w-full flex justify-around flex-wrap items-center sm:space-y-0 space-y-2 p-5">
         {showAllLabel && (
          <button
              key="all"
              onClick={() => onCategoryChange("All")}
              className={`${currentCategory === "All" ? selectedStyle : generalStyle}`}
             >
             All
          </button>
         )}
         {items.map((item) => (
            <button 
                   key={item as string} 
                   onClick={() => onCategoryChange(item as string)}
                   className={`${currentCategory.toLocaleLowerCase() === item.toLocaleLowerCase() ? selectedStyle : generalStyle}`}
            >
               {redirectTo ? (
                  <Link to={`/news/category/${item}`}>
                      {item}
                   </Link>
               ) : item }
            </button>
           ))}
      </div>  
  )
}

export default Tabs
