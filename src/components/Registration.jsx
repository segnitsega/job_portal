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

        <div className="flex flex-col gap-2 ml-32 mt-20 ">
            <h1 className='font-bold  text-4xl'>Registration form</h1>
            <p className="text-gray-400">Register to apply to jobs of your choice all over the world</p>
        </div>

        <div  className="bg-white shadow-lg rounded-2xl p-8 w-auto shadow-[0_4px_8px_rgba(0,0,0,0.3)] mb-24 mt-12 ml-32 mr-40">

            {/* Full Name */}
            <div  className="mb-8">
                <label htmlFor="fullName" className="block text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full p-2 border border-gray-300 rounded-lg px-8 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Email ID */}
            <div className="mb-8">
                <label htmlFor="email" className="block text-gray-700">
                    Email ID <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded-lg px-8 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-gray-400">Job notifications will be sent on this email id</p>
            </div>

            {/* Password */}
            <div className="mb-8">
                <label htmlFor="password" className="block text-gray-700">
                    Password <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="(Mininum 6 characters)"
                    className="w-full p-2 border border-gray-300 rounded-lg px-8 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* Mobile Number */}
            <div className="mb-12">
                <label htmlFor="mobileNumber" className="block text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    className="w-full p-2 border border-gray-300 rounded-lg px-8 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-gray-400">Recruiters will contact you on this number</p>
            </div>

            <label>
                <input type="checkbox" className="mr-1"/>
                Send me important updates & promotions via SMS, email, and <i className="fab fa-whatsapp text-green-500 ml-2 mr-2"></i>whatsapp
            </label>

            <p className="mt-16">By clicking Registrater, you agree to the <span className="text-primary">Terms and Conditions <span className="text-gray-400">&</span>Privacy Policy</span> of AlwaysApply.com</p>

            <button className="text-white font-bold bg-primary px-8 py-3 hover:bg-primary rounded transition-transform transform hover:scale-105 hover:shadow-lg mt-4">Register now</button>

            <div className="flex items-center gap-4 mt-16 mb-6">
                <div className="border-t border-gray-300 flex-grow ml-52"></div>
                    <p>or sign up with</p>
                <div className="border-t border-gray-300 flex-grow mr-52"></div>
            </div>

            <div className="flex justify-center gap-8 mb-16">
                <img src={google} alt="google_img" />
                <img src={fb} alt="fb_img" />
                <img src={linkedIn} alt="linkedIn_img" />
            </div>
    
                
        </div>
    
    </div>
  )
}

export default Registration
