import { FaSearchengin } from "react-icons/fa6";
import { CiSearch, CiLocationOn, CiBookmark  } from "react-icons/ci";
import Vector from "../assets/Vector.png"
import { siApple, siHp, siOracle, siLenovo, siIndeed} from 'simple-icons/icons';
import employee1 from '../assets/employee1.png';
import { IoChevronUpOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function JobSearch() {
  return (
    <div>
        
        {/* started from the smallest screen sizes (320px) */}
        <div className="lg:flex lg:justify-between lg:p-8">

            <div className="flex items-center justify-center mt-4 lg:ml-20 "> 
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>
            </div>

        <nav className="flex space-x-3 lg:space-x-10 justify-around mt-4">
            <p className="text-primary lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Home</p>
            <p className="text-primary lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Find Jobs</p>
            <p className="text-primary lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Employers</p>
            <p className="text-primary lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">About Us</p>
        </nav>

        <div className="flex gap-4 mt-4 lg:gap-0 lg:space-x-4 lg:mt-0 lg:block lg:mr-20">

            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-1 py-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded md:ml-4 lg:px-6 lg:py-3">Contact Us</button>

            <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg md:ml-4 lg:px-8 lg:py-3">Login</button>
        </div>

        </div>
        


        {/* Job Searching page */}

        <h1 className="font-bold mt-8 pl-2 lg:ml-20 lg:pl-8 lg:pt-8 lg:text-4xl mb-2">Job Search</h1>
        <p className="text-gray-400 pl-2 lg:ml-20 lg:pl-8 lg:text-lg">Search for your desired job matching your skills</p>

        <div className="flex flex-col gap-4 mt-4 ml-2 md:items-center md:flex-row md:mx-4 md:gap-0  md:bg-gray-100 rounded-lg lg:mx-28 lg:mt-8 lg:p-2">

            <div className="flex items-center border-2 md:border-0 mr-16 md:mr-0 lg:ml-8">
                <CiSearch className="mr-2 text-gray-500 "/>
                <input type="text" placeholder="Enter job title" className="focus:outline-none focus:ring focus:ring-blue-500 md:focus:ring-0 md:bg-gray-100"/>
            </div>

            <div className="flex items-center border-2 mr-16 md:border-0 md:mr-0">
                <CiLocationOn className="mr-2 text-gray-500 text-xl"/>
                <input type="text" placeholder="Enter location" className="focus: outline-none focus:ring focus:ring-blue-500 md:focus:ring-0 md:bg-gray-100"/>
            </div>

            <div className="flex items-center border-2 mr-16 md:border-0 md:mr-0">
                <img src={Vector} alt="" className="mr-2"/>
                <input type="text" placeholder="Years of experience" className="focus: outline-none focus:ring focus:ring-blue-500 md:focus:ring-0 md:bg-gray-100 md:mr-4"/>
            </div>

            <button className="m-1 p-1 text-white w-40 md:mr-4 md:ml-0 rounded bg-primary hover:scale-105 hover:shadow-lg lg:ml-48 lg:p-3 lg:w-32">Search</button>

        </div>

        
  
            <div className="flex items-center mt-8 mb-4 lg:ml-24 lg:mb-0 lg:mt-16 lg:w-full">
                <h1 className="hidden md:block font-bold ml-8">Filter</h1>
                <p className="hidden md:block text-gray-400 ml-64 lg:ml-60">Clear All</p>

                <div className="lg:flex lg:items-center lg:ml-12 lg:gap-96">
                    <h1 className="font-bold md:ml-4">All Jobs (2310)</h1> 
                    <div className="hidden lg:flex lg:items-center lg:p-1 lg:border-2 border-gray-300 rounded-lg ">
                        <p>Popular</p>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>

            </div>
        

  

    {/* Container for the filtering and job listing */}
    <div className="flex justify-center gap-6 lg:justify-between lg:mx-20 lg:px-8 lg:items-start">

        {/* For filtering jobs */}
        <div className="hidden md:block bg-gray-100 ml-4 rounded-lg pt-12 pl-4 pr-4 lg:mt-3 lg:ml-2">

                <h1 className="font-bold">Salary Range</h1>

                <div className="flex gap-4 mt-2 mb-16">
                    <input type="number" placeholder="Min" className="px-1 py-1 w-40 rounded-md outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="number" placeholder="Max"className="px-1 py-1 w-40 rounded-md outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div className="border-t border-gray-300 mx-2 my-12"></div>

                <div className="flex justify-between">
                    <h1 className="font-bold">Job Type</h1>
                    <IoChevronUpOutline className="text-lg"/>    
                </div>
                
                <div className="flex flex-col">

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Full-Time (450)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Part-Time (145)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                            Internship (65)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                            Contract (12)
                    </label>
                            

                </div>

                <div className="border-t border-gray-300 mx-2 my-12"></div>
                

                <div className="flex justify-between">
                    <h1 className="font-bold">Work Mode</h1>
                    <IoChevronUpOutline className="text-lg"/>    
                </div>

                <div className="flex flex-col">

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        On-Site
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Remote (180)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Hybrid (200)
                    </label>

                </div>

                <div className="border-t border-gray-300 mx-2 my-12"></div>


                <div className="flex justify-between">
                    <h1 className="font-bold">Job Functions</h1>
                    <IoChevronUpOutline className="text-lg"/>    
                </div>

                <div>

                <div className="flex flex-col">

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Marketing (21)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Engineering (45)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Design (71)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Sales (24)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Customer Service (109)
                    </label>

                    </div>

                </div>

                <div className="border-t border-gray-300 mx-2 my-12"></div>


                <div className="flex justify-between">
                    <h1 className="font-bold">Experience Level</h1>
                    <IoChevronUpOutline className="text-lg"/>    
                </div>

                <div className="flex flex-col">

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Fresher/Entry-Level (265)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Junior (21)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Mid-Level (212)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Senior (12)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Lead/Managerial (24)
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" className="mr-2 my-4"/>
                        Director/Executive (10)
                    </label>

                    </div>

                    <div className="flex justify-center m-4">
                        <MdOutlineKeyboardArrowDown className="text-xl text-primary mr-2"/>    
                        <p className="text-primary underlined">Expand all</p>
                    </div>
                    

        </div>


        <div className="lg:flex lg:flex-col">
            {/* Job listing container */}
            <div className="flex flex-col md:items-end lg:flex-row">  

                {/* 1-3 jobs */}
                <div  className="lg:flex lg:flex-col">

                        {/* First box in job features */}
                    <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4 mt-0 lg:pt-0">
                        
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-lg font-medium">Technical Support Specialist</h1>
                                <CiBookmark className="text-2xl text-gray-400"/>
                            </div>
                            <p className="mr-8"><span className="bg-green-100 rounded text-green-700 font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: $20,000 - $25,000</span></p>     
                            
                        <div className="flex items-center mt-8">
                            {/* imported google icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50" height="45" viewBox="0 0 48 48"
                            >
                                <path fill="#EA4335" d="M24 9.5c1.82 0 3.55.63 4.9 1.8l3.65-3.57C29.3 5.92 26.75 5 24 5 15.82 5 9.27 10.79 7.08 18.13l4.77 3.71C13.22 14.94 18.07 9.5 24 9.5z" />
                                <path fill="#34A853" d="M24 38.5c4.68 0 8.6-1.54 11.46-4.21l-4.85-3.75c-1.46.98-3.32 1.56-6.61 1.56-5.06 0-9.36-3.46-10.88-8.12l-4.76 3.67C10.52 32.73 16.77 38.5 24 38.5z" />
                                <path fill="#4285F4" d="M41.84 24.5c0-.98-.09-1.96-.23-2.88H24v5.46h10.15c-.48 2.39-1.96 4.43-4.03 5.78l4.85 3.75C38.98 33.73 41.84 29.6 41.84 24.5z" />
                                <path fill="#FBBC05" d="M13.85 25.5c-.36-1.07-.57-2.21-.57-3.5 0-1.21.21-2.35.57-3.42l-4.77-3.71C7.55 16.61 7 18.25 7 20c0 1.75.55 3.39 1.51 4.71l5.34-4.21z" />
                            </svg>
                            <div>
                                <h1 className="font-medium">Google Inc.</h1>
                                <div className="flex items-center">
                                    <CiLocationOn className="text-black"/>
                                    <p className="text-gray-400">New Delhi, India</p> 
                                </div>        
                            </div>             
                        </div>   

                        <div className="flex gap-2 mt-8">
                            <img src={employee1} alt="Employee 1" />
                            <p>10+ applicants</p>
                        </div>

                        <div className="flex justify-around mt-8">
                            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                            <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                        </div>

                    </div>



                    {/* The second box of job features */}      
                    <div className="bg-setted w-auto h-auto border rounded-lg p-3 m-4 -ml-">

                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Senior UI/UX Designer</h1>
                            <CiBookmark className="text-2xl text-gray-400"/>
                        </div>

                        <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">FULL-TIME</span> <span className="text-gray-400">Salary: $30,000 - $55,000</span></p>    


                        <div className="flex mt-8 gap-2">
                                {/* imported apple icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                dangerouslySetInnerHTML={{ __html: siApple.svg }}
                                className="w-10 h-10"
                            />
                            <div>
                                <h1>Apple</h1>
                                <div className="flex items-center text-gray-400">
                                    <CiLocationOn className="text-black"/>
                                    <p>Boston, USA</p>   
                                </div>     
                            </div>

                        </div>

                        <div className="flex gap-2 mt-8">
                            <img src={employee1} alt="Employee 1" />
                            <p>9+ applicants</p>
                        </div>

                        <div className="flex justify-around mt-8">
                            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                            <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                        </div>


                    </div>

                    
                    {/* Third box of job features */}
                    <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4">

                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Marketing Officer</h1>
                            <CiBookmark className="text-2xl text-gray-400"/>
                        </div>

                        <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: $15,000 - $30,000</span></p>    

                        <div className="flex gap-2 mt-8">
                            
                                {/* imported hp icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#156DA8"
                                dangerouslySetInnerHTML={{ __html: siHp.svg }}
                                className="w-10 h-10" 
                                /> 
                            <div>
                                <h1>Hp</h1>
                                <div className="flex items-center text-gray-400">
                                    <CiLocationOn className="text-black"/>
                                    <p>Palo Alto, California</p>   
                                </div>     
                            </div>
                        </div>

                    <div className="flex gap-2 mt-8">
                        <img src={employee1} alt="Employee 1" />
                        <p>30+ applicants</p>
                    </div>

                    <div className="flex justify-around mt-8">
                        <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                        <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                    </div>    
                        
                    </div>

                </div>



                {/* 4-6 jobs */}
                <div className="lg:flex lg:flex-col">
                        {/* fourth job list */}
                    <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4 lg:pt-0">

                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Product Manager</h1>
                            <CiBookmark className="text-2xl text-gray-400"/>
                        </div>

                        <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: $10,000 - $35,000</span></p>    

                        <div className="flex gap-2 mt-8">
                            
                                {/* imported Indeed icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#156DA8"
                                dangerouslySetInnerHTML={{ __html: siIndeed.svg }}
                                className="w-10 h-10" 
                                /> 
                            <div>
                                <h1>Indeed</h1>
                                <div className="flex items-center text-gray-400">
                                    <CiLocationOn className="text-black"/>
                                    <p>London, England</p>   
                                </div>     
                            </div>
                        </div>

                    <div className="flex gap-2 mt-8">
                        <img src={employee1} alt="Employee 1" />
                        <p>19+ applicants</p>
                    </div>

                    <div className="flex justify-around mt-8">
                        <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                        <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                    </div>    
                        
                    </div>

                    {/* Fiveth job list */}
                    <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4 md:hidden lg:block">

                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">Software Engineer</h1>
                            <CiBookmark className="text-2xl text-gray-400"/>
                        </div>

                        <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: $50,000 - $80,00</span></p>    

                        <div className="flex gap-2 mt-8">
                            
                                {/* imported Indeed icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#156DA8"
                                dangerouslySetInnerHTML={{ __html: siOracle.svg }}
                                className="w-10 h-10" 
                                /> 
                            <div>
                                <h1>Oracle</h1>
                                <div className="flex items-center text-gray-400">
                                    <CiLocationOn className="text-black"/>
                                    <p>Paris, France</p>   
                                </div>     
                            </div>
                        </div>

                    <div className="flex gap-2 mt-8">
                        <img src={employee1} alt="Employee 1" />
                        <p>27+ applicants</p>
                    </div>

                    <div className="flex justify-around mt-8">
                        <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                        <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                    </div>    
                        
                    </div>

                    {/* sixth job list */}
                    <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4 md:hidden lg:block">

                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-lg font-medium">UI Designer</h1>
                            <CiBookmark className="text-2xl text-gray-400"/>
                        </div>

                        <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">FULL-TIME</span> <span className="text-gray-400">Salary: $10,000 - $35,000</span></p>    

                        <div className="flex gap-2 mt-8">
                            
                                {/* imported Lenovo icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#156DA8"
                                dangerouslySetInnerHTML={{ __html: siLenovo.svg }}
                                className="w-10 h-10" 
                                /> 
                            <div>
                                <h1>Lenovo</h1>
                                <div className="flex items-center text-gray-400">
                                    <CiLocationOn className="text-black"/>
                                    <p>Nekemte, Ethiopia</p>   
                                </div>     
                            </div>
                        </div>

                        <div className="flex gap-2 mt-8">
                            <img src={employee1} alt="Employee 1" />
                            <p>40+ applicants</p>
                        </div>

                        <div className="flex justify-around mt-8">
                            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-4 py-1 transition-transform transform hover:scale-105 hover:shadow-lg">View details</button>

                            <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Apply now</button>
                        </div>    
                        
                    </div>


                </div>


                
                {/* <p className="flex justify-center mt-2 mb-2 text-xl md:mx-32 md:mt-16 cursor-pointer text-primary underline hover:scale-105 lg:items-end">View all</p> */}

            </div>

            <div>
                <p className="flex justify-center mt-2 mb-2 text-xl md:mx-32 md:mt-16 cursor-pointer text-primary underline hover:scale-105 ">View all</p>
            </div>

        </div> 
        

    </div>


         


    </div>
  )
}

export default JobSearch
