import { AiFillHome, AiFillInfoCircle, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlineWork } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import Logo from '../../images/web-development.svg?component';

const Header = () => {
  return(
    <header>
      <Logo />
      <nav>
        <ul>
          <li><a href='#home'><AiFillHome /></a></li>
          <li><a href='#about'><AiFillInfoCircle /></a></li>
          <li><a href="#tools"><BsTools /></a></li>
          <li><a href="#projects"><MdOutlineWork /></a></li>
        </ul>
        {/* <div className='social'>
          <li><AiFillLinkedin className='linkedin' /></li>
          <li><AiFillGithub className='github' /></li>
          <li><AiOutlineWhatsApp className='whatsapp' /></li>
        </div> */}
      </nav>
    </header>
  )
}

export default Header;
