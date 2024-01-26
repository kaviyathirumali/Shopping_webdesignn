import { MdShoppingBasket } from 'react-icons/md';
import {FaWhatsapp, FaPinterest, FaInstagram} from 'react-icons/fa'

const Footer=()=>{
    return(
        <div className='footer'>
            <div className="footer-logo flex mx-2 text-center justify-center list-none p-0 gap-x-4">
                <MdShoppingBasket className="text-5xl text-red-500"/>
                <p className="bg-black-300 text-4xl font-bold ">SHOPPING</p>
            </div>
            <div className='footer-link text-center flex'>
                <ul className='flex justify-center list-none p-0'>
                    <li className='mx-6'>Company</li>
                    <li className='mx-6'>Products</li>
                    <li className='mx-6'>Offices</li>
                    <li className='mx-6'>About</li>
                    <li className='mx-6'>Contact</li>
                </ul>
            </div>
            <div className='social-icon text-center flex justify-center list-none p-0'>
                <FaWhatsapp size={30} className='mx-4'/>
                <FaPinterest size={30} className='mx-4'/>
                <FaInstagram size={30} className='mx-4'/>
            </div><br/>
            <div className='footer-copy-right text-center flex'>
                <hr className='bolder-t-2 border-black'/><br/>
                <p className='flex justify-center list-none p-0'>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;