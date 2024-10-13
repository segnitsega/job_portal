import { FaSearchengin } from "react-icons/fa6";
import '../index.css'
import sitting from "../assets/sitting.png"

const LoginPage = () => {
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

    <div className="flex flex-col gap-2 ml-32 mt-20">
        <h1 className="font-bold text-4xl">Login to your Account</h1>
        <p className="text-gray-400">welcome back! Select te below login methods.</p>
    </div>

    <div className="">

        <div className="flex flex-col">
            <label htmlFor="email">Email ID / Username</label>
            <input type="text" placeholder="Email ID / Username" className="border border-gray-400 p-2 rounded-lg"/>
        </div>

        <div className="flex flex-col">

            <label htmlFor="password">Password</label>
            <div>
                <input type="text" placeholder="Enter Password" className="border border-gray-400 p-2 rounded-lg"/>
                <span className="-ml-14">Show</span>
            </div>
            
        </div>
        
     </div>

    </div>
  )
}

export default LoginPage
