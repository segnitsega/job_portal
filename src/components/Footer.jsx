import { FaSearchengin } from "react-icons/fa6";
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className="hidden lg:block bg-gradient-to-t from-setted via-white to-setted p-16">

        <div className="flex justify-around items-center">
        
            <div>
                <div className="flex items-center">
                <FaSearchengin className="text-primary text-xl cursor-pointer"/>
                    <p className="text-primary font-bold text-xl cursor-pointer">AlwaysApply</p>  
                </div>
                <p className="text-gray-500 mt-8">Call now: <span className='text-primary'>+919591776078</span></p>
                <p className="text-gray-500 mt-4">456 Hachalu Hundesa Street,</p>
                <p className="text-gray-500">Near Gefersa river, Burayu.</p>
                <p className="text-gray-500">Finfine 110006, Ethiopia</p>
            </div>

            <div>
                <h1 className="text-primary font-bold text-lg">Quick Link</h1> 
                <nav className="mt-4 leading-relaxed">
                    <ul className="text-gray-500">About</ul>
                    <ul className="text-gray-500">Contact</ul>
                    <ul className="text-gray-500">Admin</ul>
                </nav>
            </div>

            <div>
                <h1 className="text-primary font-bold text-l">Candidate</h1>
                <nav className="mt-4 leading-relaxed">
                    <ul className="text-gray-500">Browse Jobs</ul>
                    <ul className="text-gray-500">Browse Employers</ul>
                    <ul className="text-gray-500">Candidate Dashboard</ul>
                    <ul className="text-gray-500">Saved Jobs</ul>
                </nav>
            </div>

            <div>
            <h1 className="text-primary font-bold text-l">Employers</h1>
                <nav className="mt-4 leading-relaxed">
                    <ul className="text-gray-500">Post a Job</ul>
                    <ul className="text-gray-500">Browse Candidates</ul>
                    <ul className="text-gray-500">Employers Dashboard</ul>
                    <ul className="text-gray-500">Applications</ul>
                </nav>
            </div>

            </div>

            <div className="border-t border-gray-300 mb-10 mt-8"></div>
            
            <div className="flex justify-between pl-24 pr-24">
                <p className="text-footer">@ 2022 AlwaysApply - Job Portal.All rights Reserved</p>
                <div className="flex gap-7">
                    <FontAwesomeIcon icon={faGoogle} className="text-icons"/>
                    <FontAwesomeIcon icon={faYoutube} className="text-icons"/>
                    <FontAwesomeIcon icon={faInstagram} className="text-icons"/>
                    <FontAwesomeIcon icon={faTwitter} className="text-icons"/>
                </div> 
            </div>
            

    </div>

    <div className="lg:hidden flex flex-col gap-4 bg-gradient-to-t from-setted via-white to-setted p-6">

        <div className="flex justify-between items-center">

            <div className="text-xs">
                <div className="flex items-center mb-2">
                    <FaSearchengin className="text-primary text-lg cursor-pointer"/>
                    <p className="text-primary font-bold text-lg cursor-pointer ">AlwaysApply</p>  
                </div>
                <p className="text-gray-500">Call now: <span className='text-primary'>+919591776078</span></p>
                <p className="text-gray-500">456 Hachalu Hundesa Street,</p>
                <p className="text-gray-500">Near Gefersa river, Burayu.</p>
                <p className="text-gray-500">Finfine 110006, Ethiopia</p>
            </div>

            <div className="text-xs">
                <h1 className="text-primary font-bold mb-2">Quick Link</h1> 
                <nav className="">
                    <ul className="text-gray-500">About</ul>
                    <ul className="text-gray-500">Contact</ul>
                    <ul className="text-gray-500">Admin</ul>
                </nav>
            </div>




        </div>

        <div className="flex justify-between items-center">

            <div>

                <div className="text-xs">
                    <h1 className="text-primary font-bold text-l">Candidate</h1>
                    <nav className="mt-2">
                        <ul className="text-gray-500">Browse Jobs</ul>
                        <ul className="text-gray-500">Browse Employers</ul>
                        <ul className="text-gray-500">Candidate Dashboard</ul>
                        <ul className="text-gray-500">Saved Jobs</ul>
                    </nav>
                </div>

            </div>

            <div className="text-xs">
                <h1 className="text-primary font-bold text-l">Employers</h1>
                <nav className="mt-2">
                    <ul className="text-gray-500">Post a Job</ul>
                    <ul className="text-gray-500">Browse Candidates</ul>
                    <ul className="text-gray-500">Employers Dashboard</ul>
                    <ul className="text-gray-500">Applications</ul>
                </nav>
            </div>
        </div>

        <div className="border-t border-gray-300 mb-2 mt-8"></div>
            
            <div className="flex justify-between items-end text-xs">
                <p className="text-footer">@ 2022 AlwaysApply - Job Portal.All rights Reserved</p>
                <div className="flex gap-1">
                    <FontAwesomeIcon icon={faGoogle} className="text-icons"/>
                    <FontAwesomeIcon icon={faYoutube} className="text-icons"/>
                    <FontAwesomeIcon icon={faInstagram} className="text-icons"/>
                    <FontAwesomeIcon icon={faTwitter} className="text-icons"/>
                </div> 
            </div>

    </div>

    </>
  )
}

export default Footer
