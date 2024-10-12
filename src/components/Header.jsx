import { FaSearchengin } from "react-icons/fa6";
import { CiSearch, CiLocationOn  } from "react-icons/ci";
import './Header.css'
import job from '../assets/job.jpg'
import '../index.css'


function Header() {
  return (
   <>   

       <div className="flex justify-between p-8"> 

            <diV className="flex items-center ml-20"> 
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>
            </diV>

        <nav className="flex space-x-10">
            <p className="hover:text-primary hover:font-bold hover:text-lg cursor-pointer">Home</p>
            <p className="hover:text-primary hover:font-bold hover:text-lg cursor-pointer">Find Jobs</p>
            <p className="hover:text-primary hover:font-bold hover:text-lg cursor-pointer">Employers</p>
            <p className="hover:text-primary hover:font-bold hover:text-lg cursor-pointer">About Us</p>
        </nav>

        <div className="space-x-4 mr-20">
            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-6 py-3 transition-transform transform hover:scale-105 hover:shadow-lg">Contact Us</button>

            <button className="text-white font-bold bg-primary px-8 py-3 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Login</button>
        </div>

        </div>
       
        <div className="">
            
            <div className="flex justify-between">

            <div className="pl-8 pt-20 ml-20 ">
                <h1 className="text-5xl">Find a job that aligns with <br/> your interests and skills</h1><br/>
                <p>Thousands of jobs in all the leading sectors are waiting for you.</p>

                <div className="border-2 bg-white flex justify-between mt-8">

                    <div className="flex items-center ml-4">
                        <CiSearch className="mr-2 text-primary text-xl"/>
                        <input type="text" placeholder="Job tittle, Keyword.." className="focus: outline-none"/>
                    </div>

                    <div className="flex items-center">
                        <CiLocationOn className="mr-2 text-primary text-xl"/>
                        <input type="text" placeholder="Location" className="focus: outline-none"/>
                    </div>

                    <button className="m-2 p-3 text-white w-40 rounded bg-primary hover:scale-105 hover:shadow-lg">Find Job</button>
                    
                </div>
            </div>

            <div>
                <img src={job} alt="job_man" className="w-[500px] h-[500px] mr-16"/>
            </div>

            </div>
            
        </div>

    </>
    
  )
}

export default Header
