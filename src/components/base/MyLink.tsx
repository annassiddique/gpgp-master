import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MyLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const MyLink: React.FC<MyLinkProps> = ({ to, children, className }) => {
  const classes = twMerge(
       "border rounded-sm border-[#0E0C71] flex justify-center items-center text-sm font-semibold text-gpgp-blue hover:text-gpgp-blue/80 bg-white",
       className
  );
  return <Link 
              to={to}
              className={classes}
             >
               {children}
         </Link>;
};

export default MyLink;