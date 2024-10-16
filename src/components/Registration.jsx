import { FaSearchengin } from "react-icons/fa6";
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import google from "../assets/google.png"
import fb from "../assets/fb.png"
import linkedIn from "../assets/linkedIn.png"

function Registration() {
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

        <div className="p-8 md:p-16 flex flex-col md:ml-8 lg:gap-2 lg:ml-32 lg:mt-20 ">
            <h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>Registration form</h1>
            <p className="text-gray-400 mt-2">Register to apply to jobs of your choice all over the world</p>
        </div>

        <div  className="bg-white rounded-2xl p-4 md:p-8 mb-4 mx-4 md:mx-8 lg:p-8 w-auto shadow-[0_4px_8px_rgba(0,0,0,0.3)] lg:mb-24 lg:mt-12 lg:ml-32 lg:mr-40">

            {/* Full Name */}
            <div  className="mb-4 md:mb-6 lg:mb-8">
                <label htmlFor="fullName" className="block text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="p-2 w-full lg:p-2 border border-gray-300 rounded-lg lg:px-8 lg:py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Email ID */}
            <div className="mb-4 lg:mb-8">
                <label htmlFor="email" className="block text-gray-700">
                    Email ID <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="p-2 w-full lg:p-2 border border-gray-300 rounded-lg lg:px-8 lg:py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-gray-400">Job notifications will be sent on this email id</p>
            </div>

            {/* Password */}
            <div className="mb-4 lg:mb-8">
                <label htmlFor="password" className="block text-gray-700">
                    Password <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="(Mininum 6 characters)"
                    className="w-full p-2 border border-gray-300 rounded-lg lg:px-8 lg:py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Mobile Number */}
            <div className="mb-8 lg:mb-12">
                <label htmlFor="mobileNumber" className="block text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    className="w-full p-2 border border-gray-300 rounded-lg lg:px-8 lg:py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-gray-400">Recruiters will contact you on this number</p>
            </div>

            <label>
                <input type="checkbox" className="mr-1"/>
                Send me important updates & promotions via SMS, email, and <i className="fab fa-whatsapp text-green-500 lg:mx-2"></i>whatsapp
            </label>

            <p className="mt-8 lg:mt-16">By clicking Registrater, you agree to the <span className="text-primary">Terms and Conditions <span className="text-gray-400">&</span>Privacy Policy</span> of AlwaysApply.com</p>

            <button className="my-8 py-1 px-1 md:px-3 md:py-3 text-white font-bold bg-primary lg:px-8 lg:py-3 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg lg:mt-4">Register now</button>

            <div className="flex items-center lg:gap-4 lg:mt-16 lg:mb-6">
                <div className="border-t border-gray-300 flex-grow lg:ml-52"></div>
                    <p>or sign up with</p>
                <div className="border-t border-gray-300 flex-grow lg:mr-52"></div>
            </div>

            <div className="flex justify-center gap-4 md:gap-4 lg:gap-8 lg:mb-16">
                <img src={google} alt="google_img" />
                <img src={fb} alt="fb_img" />
                <img src={linkedIn} alt="linkedIn_img" />
            </div>
    
                
        </div>
    
    </div>
  )
}

export default Registration
