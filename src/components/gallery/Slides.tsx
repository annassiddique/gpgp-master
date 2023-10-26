import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Pagination from "../shared/Pagination";
import { GalleryItem } from "./GalleryItem";
import { useState } from "react";

const items = [
      {
          "title": "Yellow tile 1",
          "img": "https://images.prismic.io/risidiocorp/b1cdc8ad-a41a-484b-9213-841aaf101b51_indige_720.jpg?auto=compress,format&amp;w=undefined&amp;h=undefined",
          "category": "yellow"
      },
      {
          "title": "Yellow tile 2",
          "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
          "category": "yellow"
      },
      {
          "title" : "Yellow tile 3",
          "img": "https://images.prismic.io/risidiocorp/6b72633f-4f1d-416e-8188-d6c11b7de967_Plan_de_travail_2.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
          "category": "yellow"
      },
      {
          "title": "Yellow tile 4",
          "img": "https://images.prismic.io/risidiocorp/4a871d07-054c-4786-80cd-e9ee916beca4_%231.jfif?auto=compress,format&amp;w=undefined&amp;h=undefined",
          "category": "yellow"
      },
      {
        "title": "Yellow tile 7",
        "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
      },
     {
        "title" : "Yellow tile 333",
        "img": "https://images.prismic.io/risidiocorp/6b72633f-4f1d-416e-8188-d6c11b7de967_Plan_de_travail_2.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
     },
     {
        "title": "Yellow tile 8",
        "img": "https://images.prismic.io/risidiocorp/b1cdc8ad-a41a-484b-9213-841aaf101b51_indige_720.jpg?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 9",
        "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
        "title" : "Yellow tile 10",
        "img": "https://images.prismic.io/risidiocorp/6b72633f-4f1d-416e-8188-d6c11b7de967_Plan_de_travail_2.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 11",
        "img": "https://images.prismic.io/risidiocorp/4a871d07-054c-4786-80cd-e9ee916beca4_%231.jfif?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
      "title": "Yellow tile 14",
      "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
      "category": "yellow"
    },
   {
      "title" : "Yellow tile 15",
      "img": "https://images.prismic.io/risidiocorp/6b72633f-4f1d-416e-8188-d6c11b7de967_Plan_de_travail_2.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
      "category": "yellow"
   },
   {
    "title": "Yellow tile 16",
    "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
    "category": "yellow"
   },
    {
        "title" : "Yellow tile 17",
        "img": "https://images.prismic.io/risidiocorp/6b72633f-4f1d-416e-8188-d6c11b7de967_Plan_de_travail_2.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 18",
        "img": "https://images.prismic.io/risidiocorp/b1cdc8ad-a41a-484b-9213-841aaf101b51_indige_720.jpg?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
    {
        "title": "Yellow tile 19",
        "img": "https://images.prismic.io/risidiocorp/b3ae7a25-ffe5-4695-a8a2-4c809a0bda82_RisidioM.png?auto=compress,format&amp;w=undefined&amp;h=undefined",
        "category": "yellow"
    },
  ];

const Slides = () => {
 const itemsPerPage = 12; 
 const [currentPage, setCurrentPage] = useState(1);

 // Pagination
  const totalItems = items.length;
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="p-10 w-full">
        <h1 className="font-semibold w-full text-center text-base uppercase py-10">the Tiles</h1>
        <div className="w-full py-5">
            <LightGallery
                    speed={500} 
                    elementClassNames="custom-wrapper-gallery"
                    plugins={[lgThumbnail, lgZoom]}
                 >
                 {items.slice(0, 20).map(gallery => 
                     <GalleryItem 
                         key={gallery.title}
                         title={gallery.title} 
                         imageUrl={gallery.img}
                      />
                )}
            </LightGallery>
        </div>

        {totalItems > itemsPerPage &&  (
            <div className="flex justify-center max-w-screen-xl m-auto py-10">
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

export default Slides;
