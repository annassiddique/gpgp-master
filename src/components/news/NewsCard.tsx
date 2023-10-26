import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge';

interface NewsCardProps {
    title: string;
    href: string,
    imageUrl: string;
    classes?: string,
}

export const NewsCard = ({ 
    title,
    href,
    imageUrl,
    classes
}: NewsCardProps) => {
  return (
     <div>
        <Link to={href}>
            <img
                src={require(`../../assets/images/${imageUrl}`)}
                alt={title}
                className="hover:opacity-90 transition duration-300 ease-in-out rounded-md"
            /> 
        </Link>
        <p className={twMerge("py-3 sm:text-base text-sm", classes)}>
            {title}
        </p>
     </div>
  )
}
