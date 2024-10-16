import { FaSearchengin } from "react-icons/fa6";
import '../index.css'
import sitting from "../assets/sitting.png"
import google from "../assets/google.png"
import fb from "../assets/fb.png"
import linkedIn from "../assets/linkedIn.png"


const LoginPage = () => {
  return (
    <div>
        
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



     {/* The Login Page */}
   
        <div className="flex flex-col ml-8 mt-12 gap-1 lg:gap-2 lg:ml-32 lg:mt-20">
            <h1 className="font-bold text-lg lg:text-4xl ">Login to your Account</h1>
            <p className="text-gray-400">welcome back! Select te below login methods.</p>
        </div>
        
        <div className="flex flex-col m-8 p-6 lg:flex-row lg:gap-32 lg:ml-32 lg:mr-8 lg:mt-12 lg:mb-16 shadow-[0_4px_8px_rgba(0,0,0,0.3)] rounded-3xl w-auto">

            <div className="custom:flex custom:flex-col gap-4">

                <div className="flex flex-col lg:pl-8 lg:pt-10">
                    <label htmlFor="email">Email ID / Username</label>
                    <input type="text" placeholder="Email ID / Username" className="border border-gray-400 p-2 rounded-lg lg:mr-8 lg:w-96 lg:px-8 lg:py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>

                <div className="flex flex-col lg:pl-8 lg:mt-10">

                    <label htmlFor="password">Password</label>
                    <div className="custom:flex custom:items-center">
                        <input type="text" placeholder="Enter Password" className="border border-gray-400 p-2 rounded-lg lg:px-8 lg:py-4 lg:w-96 focus:ring-2 focus:ring-blue-500 focus:outline-none "/>
                        <span className="-ml-16 lg:-ml-14 text-primary cursor-pointer">Show</span>   
                    </div>
                </div>

                    <div className="flex justify-between custom:gap-12 custom:text-sm mt-2 lg:ml-8 lg:mr-8">
                        <label htmlFor="radio" className="custom:flex custom:items-center">
                            <input type="checkbox" className="mr-1"/>
                            Remember me
                        </label>
                        <p className="text-primary underline">Forgot Password?</p>
                    </div>

                    <button className="text-white font-bold bg-primary lg:mt-10 lg:ml-4 lg:px-8 lg:py-3 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg lg:w-96">Login</button>
                    
                    <div className="flex items-center lg:gap-4 lg:mt-10 lg:mb-6">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <p>or login with</p>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>

                    <div className="flex justify-center lg:gap-4">
                        <img src={google} alt="google_img" />
                        <img src={fb} alt="fb_img" />
                        <img src={linkedIn} alt="linkedIn_img" />
                    </div>
                                

                    <p className="lg:ml-16 lg:mt-16 lg:pb-8 ">Don't have an account?<span className="underline text-primary cursor-pointer"> Register</span></p>

            </div> 

            <div className="hidden lg:block">
                <img src={sitting} alt="sitting_person" className=""/>
            </div>

        </div>
        
   
    
    </div>
  )
}

export default LoginPage
