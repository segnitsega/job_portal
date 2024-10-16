import '../index.css'
import Flipkart from '../assets/Flipkart.svg'
import Google from '../assets/Google.svg'
import Youtube from '../assets/Youtube.svg'
import Microsoft from '../assets/Microsoft.svg'
import IBM from '../assets/IBM.svg'


const TopCompanies = () => {
  return (
    <div>
      
        <div className="flex items-center custom:gap-2 custom:m-2 lg:justify-center lg:gap-10">
            <div className="border-t border-gray-300 flex-grow lg:ml-24"></div>
            <span className="lg:px-3 text-gray-500 text-xs lg:text-2xl">Top companies hiring now</span>
            <div className="border-t border-gray-300 flex-grow lg:mr-24"></div>
        </div>

        <div className='hidden lg:flex lg:flex-row lg:justify-around lg:items-center lg:mt-6 lg:mb-8'>
            <img src={Google} alt="Google_img" className='w-36 h-28'/>
            <img src={Microsoft} alt="Microsoft_img" className='w-36 h-32'/>    
            <img src={Youtube} alt="Youtube_img" className='w-36 h-28'/>
            <img src={IBM} alt="IBM_img" className='w-36 h-28'/>            
            <img src={Flipkart} alt="Flipkart_img" className='hidden lg:block w-36 h-32'/>
        </div>

        <div className='lg:hidden custom:flex flex-col justify-center items-center'>
          <div className='flex gap-4'>
            <img src={Google} alt="Google_img" className='w-36 h-28'/>
            <img src={Microsoft} alt="Microsoft_img" className='w-36 h-32'/> 
          </div>
            
          <div className='flex gap-4'>
            <img src={Youtube} alt="Youtube_img" className='w-36 h-28'/>
            <img src={IBM} alt="IBM_img" className='w-36 h-28'/>   
          </div>
        </div>


    </div>
  )
}

export default TopCompanies
