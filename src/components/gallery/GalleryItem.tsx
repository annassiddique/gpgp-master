import React from 'react'
import { Link } from 'react-router-dom';

interface GalleryItemProps {
    title: string;
    imageUrl: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
    title,
    imageUrl
}) => {
  return (
          <Link to={imageUrl}>
            <img
                  src={imageUrl}
                  className="w-full"
                  alt={title}
              />
              <div className="font-normal text-base py-5 text-center text-gpgp-darkblue">
                {title}
              </div>
           </Link>
  )
}
