import logo from '../assets/Logo_square.png';
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <header className='fixed flex items-center justify-between w-full h-[6rem] p-[1rem] bg-[var(--bgColor2)] backdrop-blur-[4px] z-[2]'>
            
            <div className='logoDiv cursor-pointer flex-center' onClick={handleScrollToTop}>
                <img src={logo} alt='#' className='w-[150px] pl-[0.5rem] pr-[1.5rem] transform-[translateY(5px)]'></img>
                <h2 className=''>[fakla&#658;]</h2>
            </div>

            <navbar className='hidden absolute h-[max-content] w-[80vw] rounded-[0.5rem] bg-[rgba(0,0,0,0.7)] top-[5rem] left-[45%] p-[1rem] transform-[translate(-50%)] shadow-[0_2px_4px_rgba(2,15,29,0.9)] transition-[0.2s ease-in-out] '>
                <ul className="flex-center flex-col">
                    <li className="p-[1.5rem_0]"><a href="#" className='navLink' onClick={handleScrollToTop}>Home</a></li>
                    <li className="p-[1.5rem_0]"><a href="#tour" className='navLink'>Tour</a></li>
                    <li className="p-[1.5rem_0]"><a href="#about" className='navLink'>About</a></li>
                    <li className="p-[1.5rem_0]"><a href="#media" className='navLink'>Media</a></li>
                </ul>
                <div className="absolute top-[1rem] right-[1.25rem] text-[2.5rem] p-[0.5rem] text-[var(--sColor)] hover:text-[var(--pColor)]">
                    <IoCloseCircle />
                </div>
            </navbar>

            <div className="absolute">
                <TbGridDots  />
            </div>
        </header>
    )
}

export default Navbar
