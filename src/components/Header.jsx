import { FaSearchengin } from "react-icons/fa6";
import { CiSearch, CiLocationOn  } from "react-icons/ci";
import job from '../assets/job.jpg'
import '../index.css'

function Header() {
  return (
   <>   

        {/* started from the smallest screen sizes (320px) */}
        <div className="lg:flex lg:justify-between lg:p-8">

            <div className="flex items-center justify-center mt-4 lg:ml-20 "> 
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>
            </div>

            <nav className="hidden lg:flex space-x-3 lg:space-x-10 justify-around mt-4">
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Home</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Find Jobs</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Employers</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">About Us</p>
            </nav>

            <div className="hidden lg:flex gap-4 mt-4 lg:gap-0 lg:space-x-4 lg:mt-0 lg:mr-20">

                <button className="text-primary font-bold hover:text-white ml-4 hover:bg-primary hover:border-none border-2 border-primary px-1 py-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded md:ml-4 lg:px-6 lg:py-3">Contact Us</button>

                <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg md:ml-4 lg:px-8 lg:py-3">Login</button>
            </div>

        </div>


        <div className="bg-setted mt-8  p-6 lg:bg-gradient-to-r lg:from-setted lg:via-white lg:to-white">
            
            <div className="lg:flex lg:justify-between">

                <div className="lg:pl-8 lg:pt-20 lg:ml-20 ">
                    
                    <h1 className="custom:font-bold text-lg custom:font-sans lg:text-5xl lg:leading-tight">Find a job that aligns with <br/>your interests and skills</h1><br className="hidden lg:block"/>

                    <p className="custom:text-sm custom:mt-1">Thousands of jobs in all the leading sectors are waiting for you.</p>

                    <div className="flex custom:flex-col custom:gap-4 custom:mt-12 lg:flex-row border-2 lg:bg-white justify-between lg:mt-8">

                        <div className="flex items-center lg:ml-4">

                            <CiSearch className="hidden lg:block lg:mr-2 text-primary lg:text-xl"/>
                            <input type="text" placeholder="Job tittle, Keyword.." className="custom:outline-blue-500 custom:rounded custom:p-2  lg:focus:outline-none"/>

                        </div>

                        <div className="lg:flex lg:items-center">

                            <CiLocationOn className="hidden lg:block lg:mr-2 text-primary lg:text-xl"/>
                            <input type="text" placeholder="Location" className="custom:outline-blue-500 custom:rounded custom:p-2  lg:focus:outline-none"/>

                        </div>

                        <button className="w-28 custom:p-2 lg:m-2 lg:p-3 text-white lg:w-40 rounded bg-primary hover:scale-105 hover:shadow-lg">Find Job</button>
                        
                    </div>

                    <p className="mt-4"><span className="text-gray-400">Suggestion:</span> UI/UX Designer, Programing,<span className="text-primary font-bold"> Digital Marketing,</span> Video, Animation</p>
                </div>

                <div>
                    <img src={job} alt="job_man" className="hidden lg:block w-[500px] h-[500px] mr-16"/>
                </div>

            </div>
            
        </div> 

    </>
    
  )
}

export default Header
