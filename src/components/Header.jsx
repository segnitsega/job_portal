import { FaSearchengin } from "react-icons/fa6";
import { CiSearch, CiLocationOn  } from "react-icons/ci";
import job from '../assets/job.jpg'
import '../index.css'

function Header() {
  return (
   <>
        <div className="bg-setted mt-8  p-6 lg:bg-gradient-to-r lg:from-setted lg:via-white lg:to-white">
            
            <div className="lg:flex lg:justify-between">

                <div className="lg:pl-8 lg:pt-20 lg:ml-20 ">
                    
                    <h1 className="custom:font-bold text-lg custom:font-sans lg:text-5xl lg:leading-tight">Find a job that aligns with <br/>your interests and skills</h1><br className="hidden lg:block"/>

                    <p className="custom:text-sm custom:mt-1">Thousands of jobs in all the leading sectors are waiting for you.</p>

                    <div className="flex custom:flex-col custom:gap-4 custom:mt-12 lg:flex-row border-2 lg:bg-white justify-between lg:mt-8">

                        <div className="flex items-center lg:ml-4">

                            <CiSearch className="hidden lg:block lg:mr-2 text-primary lg:text-xl"/>
                            <input type="text" placeholder="Job tittle, Keyword.." required className="custom:outline-blue-500 custom:rounded custom:p-2  lg:focus:outline-none"/>

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
