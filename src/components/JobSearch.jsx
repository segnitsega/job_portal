import { FaSearchengin } from "react-icons/fa6";
import { CiSearch, CiLocationOn, CiBookmark  } from "react-icons/ci";
import Vector from "../assets/Vector.png"
import { siApple, siHp, siOracle, siLenovo, siIndeed} from 'simple-icons/icons';
import employee1 from '../assets/employee1.png';



function JobSearch() {
  return (
    <div>
        
        {/* for the smallest screen sizes (320px) */}

        <diV className="flex items-center justify-center mt-4 custom:"> 
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>
        </diV>

        <nav className="flex space-x-3 justify-around mt-4">
            <p className="text-primary cursor-pointer">Home</p>
            <p className="text-primary cursor-pointer">Find Jobs</p>
            <p className="text-primary cursor-pointer">Employers</p>
            <p className="text-primary cursor-pointer">About Us</p>
        </nav>

        <div className="flex gap-4 mt-4">

            <button className="text-primary font-bold hover:text-white hover:bg-primary hover:border-none border-2 border-primary px-1 py-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded">Contact Us</button>

            <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg">Login</button>
        </div>

        <h1 className="font-bold mt-8 pl-2">Job Search</h1>
        <p className="text-gray-400 pl-2">Search for your desired job matching your skills</p>

        <div className="flex flex-col gap-4 mt-4 ml-2">

            <div className="flex items-center border-2 mr-16">
                <CiSearch className="mr-2 text-gray-500 "/>
                <input type="text" placeholder="Enter job title" className="focus: outline-none"/>
            </div>

            <div className="flex items-center border-2 mr-16">
                <CiLocationOn className="mr-2 text-gray-500 text-xl"/>
                <input type="text" placeholder="Enter location" className="focus: outline-none"/>
            </div>

            <div className="flex items-center border-2 mr-16">
                <img src={Vector} alt="" className="mr-2"/>
                <input type="text" placeholder="Years of experience" className="focus: outline-none"/>
            </div>

            <button className="m-1 p-1 text-white w-40 rounded bg-primary hover:scale-105 hover:shadow-lg">Search</button>

        </div>

        <div className="flex flex-col">


            
            {/* First box in job features */}
            <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4">
                
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium">Technical Support Specialist</h1>
                    <CiBookmark className="text-2xl text-gray-400"/>
                </div>
                <p className="mr-8"><span className="bg-green-100 rounded text-green-700 font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: 20,000 INR - 25,00 INR</span></p>     
                

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
            <div className="bg-setted w-auto h-auto border rounded-lg p-3 m-4">

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

                <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: 15,000INR - 30,000INR</span></p>    

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


            {/* fourth job list */}
            <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4">

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
            <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4">

                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium">Software Engineer</h1>
                    <CiBookmark className="text-2xl text-gray-400"/>
                </div>

                <p className="mr-8"><span className="bg-blue-100 rounded text-primary font-semibold p-1 text-sm">PART-TIME</span> <span className="text-gray-400">Salary: $50,000 - $150,000</span></p>    

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
            <div className="bg-setted w-auto h-auto p-3 rounded-lg m-4">

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

         


    </div>
  )
}

export default JobSearch
