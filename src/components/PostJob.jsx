import { FaSearchengin } from "react-icons/fa6";
import '../index.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const PostJob = () => {
  return (
    <div>


        {/* started from the smallest screen sizes (320px)
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

        </div> */}

        {/* PostJob Page */}

        <h1 className="font-bold mt-4 ml-4 lg:ml-20 lg:pl-8 lg:text-4xl">Post a job</h1>
        <p className="text-gray-500 text-sm ml-4 lg:ml-20 lg:pl-8">Find the best talents for your company</p>
        

        <div className="lg:flex lg:flex-col lg:ml-32 lg:mr-48">

            <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                <label htmlFor="text" className="lg:text-2xl lg:my-2">Job title</label>
                <input type="text" placeholder="Add job, role vacancies etc" className="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4"/>
            </div>

            <div className="lg:flex  gap-2 w-full">

                <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                    <label htmlFor="text" className="lg:text-2xl lg:my-2">Tags</label>
                    <input type="text" placeholder="Job keywords, tags etc.." className="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-64 lg:pl-4"/>
                </div>
                
                <div className="flex flex-col mt-4 mx-4 ">
                    <label htmlFor="text" className="lg:text-2xl lg:my-2">Job Roles</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                        <input type="text" placeholder="Select" className=" rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-52 "/>
                        <MdOutlineKeyboardArrowDown className="mr-4 lg:text-xl"/>
                    </div>
                </div>

            </div>

            <h2 className=" mt-4 flex justify-center lg:justify-start lg:text-2xl">Salary</h2>

            
            <div className="lg:flex lg:gap-12">

                <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                    <label htmlFor="text" >Min Salary</label>
                    <input type="text" placeholder="Minimum salary" className="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 "/>
                </div>

                <div className="flex flex-col mt-4 ml-4 mx-4 lg:mx-0">
                    <label htmlFor="text" >Max Salary</label>
                    <input type="text" placeholder="Minimum salary" className="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4"/>
                </div>

                <div className="hidden lg:block">
                    <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                        <label htmlFor="text" >Range</label>
                        <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                            <input type="text" placeholder="Select" className=" rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 "/>
                            <MdOutlineKeyboardArrowDown className="mr-4"/>
                        </div>
                    </div>
                </div>

            </div>

        
        
        
            <div  className="lg:flex gap-1 w-full">

                
                <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                    <label htmlFor="text" className="lg:text-2xl lg:my-2">Vacancies</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                        <input type="text" placeholder="Select" className=" border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-64 lg:pl-4"/>
                        <MdOutlineKeyboardArrowDown className="mr-4"/>
                    </div>
                </div>

                <div className="flex flex-col mt-4 mx-4 lg:mr-0 lg:ml-20">
                    <label htmlFor="text" className="lg:text-2xl lg:my-2">Job Level</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                        <input type="text" placeholder="Select" className=" rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-52 "/>
                        <MdOutlineKeyboardArrowDown className="mr-4"/>
                    </div>
                </div>

            </div>




            <h2 className="ml-4 mt-4 flex justify-center lg:justify-start lg:text-2xl lg:mx-0">Location</h2>


            <div className="lg:flex lg:gap-20 ">

                <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                    <label htmlFor="text">Country</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                        <input type="text" placeholder="Select" className=" border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-40 lg:pl-4"/>
                        <MdOutlineKeyboardArrowDown className="mr-4"/>
                    </div>
                </div>

                <div className="flex flex-col mt-4 mx-4 lg:mx-0">
                    <label htmlFor="text">City</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-lg">
                        <input type="text" placeholder="Select" className=" rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 lg:py-4 lg:pr-40 lg:pl-4"/>
                        <MdOutlineKeyboardArrowDown className="mr-4"/>
                    </div>
                </div>

            </div>


        

            <h2 className="ml-4 mt-4 lg:mx-0 lg:text-2xl">Job Description</h2>

            <textarea name="description" id="description" className="border-2 h-60 my-4 rounded-lg mx-4 lg:mx-0 outline-none focus:ring-2 focus:ring-blue-500 p-2 w-full"></textarea>

        </div>    

        <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg mb-2 ml-4 lg:ml-32 lg:px-6 lg:py-2">Post Job</button>



    </div>
  )
}

export default PostJob
