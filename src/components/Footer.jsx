
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className='mt-[5rem] flex flex-col items-center justify-center p-[32px] bg-[var(--bgColor1)]'>

      <div className='flex-center'>
        <a href="https://www.instagram.com/faquelage/?locale=en_US" className='link' target='_blank' rel="noreferrer noopener"><BiLogoInstagramAlt className='icon text-[48px] hover:text-[rgb(173,171,171)] transition-[all_0.3s_ease-in-out]' /></a>
        <a href="https://www.facebook.com/faquelage/" className='link' target='_blank' rel="noreferrer noopener"><FaFacebook className='icon text-[40px] hover:text-[rgb(68,83,255)] transition-[all_0.3s_ease-in-out]' /></a>
        <a href="https://www.youtube.com/channel/UCQgfM9ENDqaf25Lm-AbaapA" className='link' target='_blank' rel="noreferrer noopener"><FaYoutube className='icon text-[44px] hover:text-[rgb(243,26,26)] transition-[all_0.3s_ease-in-out]' /></a>
        <a href="https://open.spotify.com/intl-de/album/1fmgk5J9jZjMylWKgvdnRI" className='link' target='_blank' rel="noreferrer noopener"><FaSpotify className='icon text-[40px] hover:text-[rgb(78,240,78)] transition-[all_0.3s_ease-in-out]' /></a>

        {
          //Placeholder!
        }
        <div><IoMdMail className='icon text-[42px] hover:text-[rgb(235,47,235)] transition-[all_0.3s_ease-in-out]' /></div>
        
        
        {//<Link to="/datenschutz" className="iconLinks" onClick={handleScrollToTop}><IoMdMail className='icon email' /></Link>
        }
      </div>

      <div className="text-[var(--textColor)] flex-center flex-col mt-[1rem]">
        <p className="m-2">Copyright Faquelage 2025</p>
        <FaRegCopyright className='text-[1.2rem] m-0.5 text'/>
        <p className="m-2">Impressum & Datenschutz</p> 
        {//<Link to="/datenschutz" className="copyrightText dsLink" onClick={handleScrollToTop}>Impressum & Datenschutz</Link>
        }
      </div>
    </footer>
  )
}

export default Footer;