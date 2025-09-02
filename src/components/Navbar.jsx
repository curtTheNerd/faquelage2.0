import { useState } from 'react';
import logo from '../assets/Logo_square.png';
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const[menuDisplay, setMenuDisplay] = useState('hidden');
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    const handlePopUpMenu = () => {
        setMenuDisplay(menuDisplay === 'hidden' ? '' : 'hidden')
    }

    return (
        <header className='fixed flex items-center md:justify-center w-full h-[6rem] md:h-[7rem] p-[1rem] bg-[var(--bgColor3)] backdrop-blur-[4px] z-[2]'>
            
            <div className='logoDiv cursor-pointer flex-center ml-[5%]' onClick={handleScrollToTop}>
                <img src={logo} alt='#' className='w-[125px] md:w-[170px] p-[0.25rem]'></img>
                <h2 className='text-[2rem] md:text-[2.4rem] font-[Times_New_Roman]'>[fakla&#658;]</h2>
            </div>

            <navbar className={`${menuDisplay} absolute h-[max-content] w-[80vw] rounded-[1rem] bg-[rgba(0,0,0,0.7)] top-[5rem] left-[45%] p-[1rem] transform-[translate(-50%)] shadow-[0_2px_4px_rgba(2,15,29,0.9)] transition-[0.2s ease-in-out] 
                        md:flex md:justify-end md:relative md:w-[100%] md:h-[auto] md:rounded-[0] md:bg-[rgba(0,0,0,0)] md:top-[0] md:left-[0] md:p-[0] md:transform-[translate(0%)] md:shadow-[0_0_0_rgba(0,0,0,0)] md:pr-[3rem]`}>
                {/*     */}
                <ul className="flex-center flex-col md:flex-row p-[1.5rem_0]">
                    <li className=""><a href="#" className='navLink' onClick={handleScrollToTop}>Home</a></li>
                    <li className=""><a href="#tour" className='navLink'>Tour</a></li>
                    <li className=""><a href="#about" className='navLink'>About</a></li>
                    <li className=""><a href="#media" className='navLink'>Media</a></li>
                </ul>
                <div onClick={handlePopUpMenu} className="md:hidden absolute top-[1rem] right-[1.25rem] text-[2.5rem] p-[0.5rem] text-[var(--sColor)] hover:text-[var(--pColor)]">
                    <IoCloseCircle />
                </div>
            </navbar>

            <div  onClick={handlePopUpMenu} className="absolute top-[1.75rem] right-[2rem] text-[var(--pColor)] hover:text-[var(--sColor)] text-[2.5rem] md:hidden">
                <TbGridDots />
            </div>
        </header>
    )
}

export default Navbar
