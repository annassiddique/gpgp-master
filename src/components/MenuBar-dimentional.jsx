import { useState } from 'react'
import { Link } from 'react-router-dom'

// Image imports 
import phoneMenu from "../assets/images/phoneMenu.png"
import ClosePhoneMenu1 from "../assets/images/ClosePhoneMenu1.png"
import phoneDropDownMenu from "../assets/images/phoneDropDownMenu.png";

// All the links as static data
const links = [
    {
      name: "Project",
      dropDown: [
        {
          name: "Overview",
          link: "",
          id: 1,
        },
        {
          name: "Gallery",
          id: 2,
          link: ""
        },
        {
          name: "Artist",
          id: 3,
          link: ""
        },
        {
          name: "Exhibition",
          id: 4,
          link: ""
        },
        {
          name: "Invitation",
          id: 5,
          link: ""
        }],
      links: "",
      id: 10
    },
    {
      name: "Challenge",
      dropDown: [
        {
          name: "Garbage Patch",
          id: 1,
          link: ""
        },
        {
          name: "Plastic Litter",
          id: 1,
          link: ""
        },],
      id: 20,
      links: ""

    },
    {
      name: "Contribute",
      dropDown: undefined,
      links: "",
      id: 30,

    },
    {
      name: "News",
      dropDown: undefined,
      links: "",
      id: 40,

    },
    {
      name: "Contacts",
      dropDown: undefined,
      links: "",
      id: 50,
    },
  ]

const MenuBar = () => {
  const [PhoneDropDownOpen, setPhoneDropDownOpen] = useState(false)
  const [PhoneMenuOpen, setPhoneMenuOpen] = useState(false)
  const [PhoneMenuSymbol, setPhoneMenuSymbol] = useState(phoneMenu)

  // Handles Phone menu closing and Opening 
    const handlePhoneMenuOpenClose = () => {
    let PhoneMenu = document.getElementById(`PhoneMenu`);
    if (PhoneMenuOpen === false) {
      PhoneMenu.style.visibility = "visible";
      setPhoneMenuSymbol(ClosePhoneMenu1)
      setPhoneMenuOpen(true)
    } else {
      PhoneMenu.style.visibility = "hidden";
      setPhoneMenuOpen(false)
      setPhoneMenuSymbol(phoneMenu)
    }
  }

  // Handles desktop  dropdowns closing and Opening
  const handleDropDownShow = (id) => {
    let dropdown = document.getElementById(`dropDown-${id}`);
    dropdown.style.opacity = "1"
  }

  const handleDropDownHide = (id) => {
    let dropdown = document.getElementById(`dropDown-${id}`);
    dropdown.style.opacity = "0"
  }

  // Handles Phone menu Dropdowns closing and Opening
  const handlePhoneDropDownShow = (id) => {
    if (PhoneDropDownOpen === false) {
      let phonedropdown = document.getElementById(`Phone-wrapper-${id}`);
      phonedropdown.style.height = "auto"
      phonedropdown.style.visibility = "visible"
      phonedropdown.style.opacity = "1"
      setPhoneDropDownOpen(true)
    } else {
      let phonedropdown = document.getElementById(`Phone-wrapper-${id}`);
      phonedropdown.style.height = "0"
      phonedropdown.style.visibility = "hidden"
      phonedropdown.style.opacity = "0"
      setPhoneDropDownOpen(false)
    }
  }

  const closeMenuIconClass = PhoneMenuOpen ? 'rotate-90' : '';
  return (
    <div className=' '>
      {/* Desktop menubar */}
      <div className="sm:flex hidden items-center p-1 space-x-5">
        {/* Looping through the link array and getting all the links with dropdowns */}
        {links.map((link, index) => {
          if (link.dropDown !== undefined) {
            return (
              // Displaying Dropdown menu , refer to the link array to understand
              <div
                  key={index}
                  className="dropdown relative"
                  onMouseOver={() => handleDropDownShow(link.id)}
                  onMouseLeave={() => handleDropDownHide(link.id)} 
                 >
                <Link className='nav-links'>{link.name}</Link>
                <div 
                     className="dropdown-wrapper flex flex-col absolute top-6 opacity-0 -left-2 p-2 bg-gpgp-blue text-white shadow-sm rounded-md"
                     id={`dropDown-${link.id}`}
                >
                  {link.dropDown.map((item) => {
                    return (
                      <Link
                          key={item.id}
                          className="dropdown-links text-white hover:text-white/90 py-1 min-w-max text-center"
                      >
                         {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
           )
          } else {
            return (
              <Link
                  key={index}
                  className="nav-links hover:text-gpgp-blue"
                 >
                {link.name}
              </Link>
            )
          }
        })}
      </div>


      {/* Phone Menubar */}
      <div className="flex sm:hidden">
        <img src={PhoneMenuSymbol} alt="=" onClick={handlePhoneMenuOpenClose}
          className={`transition-transform transform ${closeMenuIconClass}`}
        />
        <div className="phone-side" id='PhoneMenu' >
          {/* Looping through the link array and getting all the links with dropdowns */}
          {links.map((link, index) => {
            if (link.dropDown !== undefined) {
              return (
                // Displaying Dropdown menu , refer to the link array to understand
                <div className="phone-dropdown" key={index}>
                  <h2 className='phoneDropdown-links min-w-fit flex flex-row items-center justify-between px-4' onClick={() => handlePhoneDropDownShow(link.id)} >
                    {/* Displaying links with dropdowns */}
                    {link.name}
                    <img src={phoneDropDownMenu} alt="⌄" className='w-[20px] ' />
                  </h2>
                  <div className="phoneDropdown-wrapper" id={`Phone-wrapper-${link.id}`}>
                    <Link key={link.id} className='phoneDropdown-sublinks'>{link.name}</Link>
                    {link.dropDown.map((item) => {
                      return (
                        <>
                          {/* Displaying sublinks as dropdowns */}
                          <Link key={item.id} className='phoneDropdown-sublinks'>{item.name}</Link>
                        </>
                      )
                    })}
                  </div>
                </div>
              )
            } else {
              return (
                <Link 
                  key={index}
                  className='phoneDropdown-links'
                >
                  {link.name}
               </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuBar