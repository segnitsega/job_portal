import { FaSearchengin } from 'react-icons/fa6'
import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }

  return (

    <div>
      {/* started from the smallest screen sizes (320px) */}
        <div className="lg:flex lg:justify-between lg:p-8">

            <div className="flex items-center justify-center mt-4 lg:ml-20 "> 
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>
                
            </div>

            <div className='sm:hidden'> 
              <div onClick={toggleMenu}>
                <RxHamburgerMenu className='text-primary ml-2 cursor-pointer'/>
              </div>  
              <nav className={`text-lg ml-2 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                <p onClick={toggleMenu}><NavLink to="./Header.jsx" >Home</NavLink></p>
                <p onClick={toggleMenu}><NavLink to="./JobSearch.jsx">Find Jobs</NavLink></p>
                <p onClick={toggleMenu}><NavLink to="./PostJob.jsx">Employers</NavLink></p>
                <p>About us</p>
              </nav>
            </div>


            <nav className="hidden lg:flex space-x-3 lg:space-x-10 justify-around mt-4">
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer"><NavLink to="./Header.jsx" >Home</NavLink> </p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer"> <NavLink to="./JobSearch.jsx">Find Jobs</NavLink></p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer"><NavLink to="./PostJob.jsx">Employers</NavLink></p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">About Us</p>
            </nav>

            <div className="hidden lg:flex gap-4 mt-4 lg:gap-0 lg:space-x-4 lg:mt-0 lg:mr-20">

                <button className="text-primary font-bold hover:text-white ml-4 hover:bg-primary hover:border-none border-2 border-primary px-1 py-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded md:ml-4 lg:px-6 lg:py-3">Contact Us</button>

                <button id='login' className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg md:ml-4 lg:px-8 lg:py-3"> <NavLink to="./LoginPage.jsx">Login</NavLink> </button>
            </div>

        </div>
    </div>
  )
}

export default NavBar
