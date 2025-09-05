import { Link } from "react-router-dom";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className='flex-center flex-col w-[100vw] h-[auto] mt-[5rem] p-[3rem] bg-[var(--bgColor1)]'>

      <div className='flex-center'>
        <a href="https://www.instagram.com/faquelage/?locale=en_US" className='link' target='_blank' rel="noreferrer noopener"><BiLogoInstagramAlt className='icon text-[48px] hover:text-[rgb(173,171,171)] transition-all duration-300' /></a>
        <a href="https://www.facebook.com/faquelage/" className='link' target='_blank' rel="noreferrer noopener"><FaFacebook className='icon text-[40px] hover:text-[rgb(68,83,255)] transition-all duration-300' /></a>
        <a href="https://www.youtube.com/channel/UCQgfM9ENDqaf25Lm-AbaapA" className='link' target='_blank' rel="noreferrer noopener"><FaYoutube className='icon text-[44px] hover:text-[rgb(243,26,26)] transition-all duration-300' /></a>
        <a href="https://open.spotify.com/intl-de/album/1fmgk5J9jZjMylWKgvdnRI" className='link' target='_blank' rel="noreferrer noopener"><FaSpotify className='icon text-[40px] hover:text-[rgb(78,240,78)] transition-all duration-300' /></a>
        <Link to='/datenschutz' onClick={handleScrollToTop}><IoMdMail className='icon text-[42px] hover:text-[rgb(235,47,235)] transition-all duration-300' /></Link>
      </div>

      <div className="text-[var(--textColor)] flex-center flex-col mt-[1rem]">
        <p className="m-2">Copyright Faquelage 2025</p>
        <FaRegCopyright className='text-[1.2rem] m-0.5 text'/>
        <Link to='/datenschutz' onClick={handleScrollToTop}><p className="m-2">Impressum & Datenschutz</p></Link> 
      </div>
    </footer>
  )
}

export default Footer;