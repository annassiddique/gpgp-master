import { useState } from 'react';
import styles from '../assets/styles/animations.module.css';
import { Link } from 'react-router-dom'
import Logo from './Logo';
import { HiChevronDown } from "react-icons/hi";

// All the links as static data
const links = [
    {
      name: "Project",
      href: "/project",
      submenu: [
        {
          name: "Overview",
          href: "/overview",
        },
        {
          name: "Gallery",
          href: "/gallery"
        }
    ]
    },
    {
      name: "Challenge",
      href: "/challenge"
    },
    {
      name: "Contribute",
      href: "/contribute",
      submenu: [
        {
          name: "Take part",
          href: "",
        },
        {
          name: "Invest",
          href: ""
        }
      ]
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Contacts",
      href: "/contact",
    }
];

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState("");

  const handleSelectItem = (item: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
      setIsAnimating(false);
      setIsOpen("")
    }, 400);
  };

  const resetSelectItem = () => {
    if(isAnimating) return;
    
    if(isOpenMenu){
        setTimeout(() => {
          setIsOpenMenu(!isOpenMenu);
          setIsAnimating(false);
          setIsOpen("")
      }, 400);
    }
  };



  const handleMobileDropDownShow = (menu: string) => {
      (isOpen === menu) ? setIsOpen("") : setIsOpen(menu)
    }

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <div className="px-4 sm:px-12 py-2 flex justify-between items-center bg-gpgp-blue sm:bg-white">
      <nav className="flex w-full md:flex items-center justify-between">
        {isOpenMenu && (
          <div
              className={`bg-white h-screen sm:hidden z-10 text-black mt-16 fixed w-full left-0 top-0 transition-all ease-in duration-500 flex flex-col items-center ${
                isOpenMenu ? styles.menuContainer : ''
              } ${isOpenMenu && styles.slideDown} ${
                   isAnimating && styles.slideUp
              }`}
            >
            <div className={`flex flex-col items-center mt-10 uppercase ${styles.menuItem}`}>
                  {links.map((link, index) => (
                     link.submenu 
                     ? (
                        <>
                        <div 
                          key={index}
                          className="text-black mx-4 my-6 text-2xl font-[200] hover:text-gpgp-blue flex items-center"
                          >
                           {link.name}
                           <HiChevronDown 
                                   onClick={() => handleMobileDropDownShow(link.name)}
                                   className="hover:cursor-pointer ease-in duration-1000 transition"
                               />
                        </div>
                          <div>
                           {link.name === isOpen && (
                                  <div className="flex flex-col">
                                     {link.submenu.map((menu) => (
                                        <div 
                                           key={menu.name}
                                           className="text-base pt-3 text-black hover:text-gpgp-blue hover:cursor-pointer"
                                         >
                                             <Link to={menu.href} onClick={() => handleSelectItem(menu.name)}>
                                                {menu.name}
                                             </Link>
                                        </div>
                                       ))}
                                  </div>
                          )}
                      </div>
                      </>
                     ) 
                     : (
                        <div 
                           key={index}
                            className="text-black mx-4 my-6 text-2xl font-[200] hover:text-gpgp-blue flex items-center "
                        >
                         <Link to={link.href} onClick={() => handleSelectItem(link.name)}>
                            {link.name}
                         </Link>
                       </div>
                     )
                  ))}
            </div>
           </div>
        )}

        <Link
             to="/"
             className="flex items-center pl-4" 
             onClick={() => resetSelectItem()}
             >
            <Logo className="w-14" />
            <h1 className="sm:flex hidden ml-3 text-2xl tracking-widest font-semibold">
                GPGP
            </h1>
        </Link>

        <div className="hidden sm:flex text-xl font-semibold">
           {links.map((link, index) => (
               link.submenu 
               ? (
                <div 
                     key={index}
                     className="group relative text-black my-0 hover:shadow-sm hover:text-white hover:cursor-pointer hover:bg-gpgp-blue rounded-md uppercase"
                 >
                    <div className="flex items-center text-sm gap-1 px-3 py-2 w-full active:font-semibold ">
                      <Link to={link.href} onClick={() => resetSelectItem()}>
                         {link.name}
                      </Link>
                   </div>
                
                   <div className="absolute top-6 pt-1 right-0 z-10 text-center mt-1 w-full rounded-md 
                                   opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                                  bg-gpgp-blue text-white min-w-max px-1">
                      {link.submenu.map((menu) => (
                          <div key={menu.name} className="text-[0.9rem] pt-3">
                                <Link to={menu.href} onClick={() => resetSelectItem()}>
                                     {menu.name}
                                </Link>
                          </div>
                      ))}
                    </div>
               </div>
               ) : (
                <div 
                   key={index}
                   className="group relative text-black my-0 hover:cursor-pointer hover:text-gpgp-blue uppercase"
                 >
                   <div className="flex items-center text-sm gap-1 px-3 py-2 w-full ">
                      <Link to= {link.href}>
                         {link.name}
                      </Link>
                   </div>
                </div>
               )
           ))}
        </div>

        {/* hamburger menu */}
        <div className="inline-block sm:hidden text-white py-1 px-3 h-auto">
                <button
                    className="flex flex-col h-auto w-12 rounded justify-center items-center group"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                <div
                    className={`${genericHamburgerLine} ${
                    isOpenMenu
                            ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-50"
                            : "opacity-100 group-hover:opacity-50"
                    }`}
                />
                <div className={`${genericHamburgerLine} ${isOpenMenu ? "opacity-0" : "opacity-100 group-hover:opacity-50"}`} />
                <div
                    className={`${genericHamburgerLine} ${
                    isOpenMenu
                            ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-50"
                            : "opacity-100 group-hover:opacity-50"
                    }`}
                />
            </button>
       </div>
     </nav>
    </div>
  );
}

export default NavBar;
