import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ContainerProps{
    children: React.ReactNode,
    sectionClass?: string;
    classes?: string;
    hasSection?: boolean;
  }

const Container = ({
    children,
    sectionClass="",
    classes="",
    hasSection= true,
 }: ContainerProps) => {
  return (
    <>
    {hasSection
        ? (
           <section className={twMerge("bg-white", sectionClass)}>
                <div className={`max-w-7xl flex justify-center mx-auto ${classes}`}>
                    {children}
                 </div>
            </section>
        )
        : (
            <div className={twMerge("max-w-7xl flex justify-center items-center mx-auto", classes)}>
               {children}
           </div>
        )
     }
    </>
  )
 }

export default Container;
