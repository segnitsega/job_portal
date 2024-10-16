import { CiLocationOn, CiBookmark  } from "react-icons/ci";
import { siApple, siHp} from 'simple-icons/icons';
import '../index.css'
import employee1 from '../assets/employee1.png';

const FeaturedJobs = () => {
  return (
    <div className="my-16 lg:my-32">

        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg lg:text-5xl">Featured Jobs</h1>
            <p className="text-gray-400 text-sm custom:mx-2 lg:text-2xl lg:mt-4">Choose jobs from the top employers and apply for the same.</p>
        </div>
       
        <div className="flex flex-col lg:flex-row custom:mx-4 lg:justify-center gap-10 mt-10">

            {/* First box in job features */}
            <div className="bg-setted w-auto h-auto p-3 rounded-lg">
                
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
            <div className="bg-setted w-auto h-auto border rounded-lg p-3">

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
            <div className="bg-setted w-auto h-auto p-3 rounded-lg">

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

        </div>

        <p className="flex justify-center mt-8 text-xl cursor-pointer text-primary underline hover:scale-105 ">View all</p>

       </div>
  )
}

export default FeaturedJobs
