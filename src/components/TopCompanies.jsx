import '../index.css'
import Flipkart from '../assets/Flipkart.svg'
import Google from '../assets/Google.svg'
import Youtube from '../assets/Youtube.svg'
import Microsoft from '../assets/Microsoft.svg'
import IBM from '../assets/IBM.svg'


const TopCompanies = () => {
  return (
    <div>
      
        <div className="flex items-center justify-center gap-10">
            <div className="border-t border-gray-300 flex-grow ml-24"></div>
            <span className="px-3 text-gray-500 text-2xl">Top companies hiring now</span>
            <div className="border-t border-gray-300 flex-grow mr-24"></div>
        </div>

        <div className='flex justify-around items-center mt-6 mb-8'>
            <img src={Google} alt="Google_img" className='w-36 h-28'/>
            <img src={Microsoft} alt="Microsoft_img" className='w-36 h-32'/>
            <img src={Flipkart} alt="Flipkart_img" className='w-36 h-32'/>
            <img src={Youtube} alt="Youtube_img" className='w-36 h-28'/>
            <img src={IBM} alt="IBM_img" className='w-36 h-28'/>

        </div>


    </div>
  )
}

export default TopCompanies
