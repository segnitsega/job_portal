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

            <nav className="flex space-x-3 lg:space-x-10 justify-around mt-4">
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Home</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Find Jobs</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">Employers</p>
                <p className="active:text-primary active:font-bold lg:text-black lg:hover:text-primary lg:hover:font-bold lg:hover:text-lg cursor-pointer">About Us</p>
            </nav>

            <div className="flex gap-4 mt-4 lg:gap-0 lg:space-x-4 lg:mt-0 lg:block lg:mr-20">

                <button className="text-primary font-bold hover:text-white ml-4 hover:bg-primary hover:border-none border-2 border-primary px-1 py-1 transition-transform transform hover:scale-105 hover:shadow-lg rounded md:ml-4 lg:px-6 lg:py-3">Contact Us</button>

                <button className="text-white font-bold bg-primary px-4 py-1 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg md:ml-4 lg:px-8 lg:py-3">Login</button>
            </div>

        </div>



    {/* The Login Page */}
    <div>
        <div className="flex flex-col gap-2 ml-32 mt-20">
            <h1 className="font-bold text-4xl">Login to your Account</h1>
            <p className="text-gray-400">welcome back! Select te below login methods.</p>
        </div>
        
        <div className="flex gap-32 ml-32 mr-8 mt-12 mb-16 shadow-[0_4px_8px_rgba(0,0,0,0.3)] rounded-3xl w-auto">

            <div>
                <div className="flex flex-col pl-8 pt-10">
                    <label htmlFor="email">Email ID / Username</label>
                    <input type="text" placeholder="Email ID / Username" className="border border-gray-400 p-2 rounded-lg mr-8 w-96 px-8 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>

                <div className="flex flex-col pl-8 mt-10">

                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="text" placeholder="Enter Password" className="border border-gray-400 p-2 rounded-lg px-8 py-4 w-96 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        <span className="-ml-14 text-primary cursor-pointer">Show</span>   
                    </div>
                </div>

                    <div className="flex justify-between mt-2 ml-8 mr-8">
                        <label htmlFor="radio">
                            <input type="checkbox" className="mr-1"/>
                            Remember me
                        </label>
                        <p className="text-primary underline">Forgot Password?</p>
                    </div>

                    <button className="text-white font-bold bg-primary mt-10 ml-4 px-8 py-3 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg w-96">Login</button>
                    
                    <div className="flex items-center gap-4 mt-10 mb-6">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <p>or login with</p>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <img src={google} alt="google_img" />
                        <img src={fb} alt="fb_img" />
                        <img src={linkedIn} alt="linkedIn_img" />
                    </div>
                                

                    <p className="ml-16 mt-16 pb-8 ">Don't have an account?<span className="underline text-primary cursor-pointer"> Register</span></p>

            </div> 

            <div>
                <img src={sitting} alt="sitting_person" className=""/>
            </div>

        </div>
        
   
    </div>
    </div>
  )
}

export default LoginPage
