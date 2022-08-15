import { AiFillHome, AiFillInfoCircle, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlineWork } from 'react-icons/md';
import Logo from '../../images/web-development.svg?component';

const Header = () => {
  return(
    <header>
      <Logo />
      <nav>
        <ul>
          <li><a href='#home'><AiFillHome /></a></li>
          <li><a href='#about'><AiFillInfoCircle /></a></li>
          {/* <li><a href="#tools"><BsTools /></a></li> */}
          <li><a href="#projects"><MdOutlineWork /></a></li>
        </ul>
      </nav>
      <div className='social'>
        <li><AiFillLinkedin className='linkedin' /></li>
        <li><AiFillGithub className='github' /></li>
        <li><AiOutlineWhatsApp className='whatsapp' /></li>
      </div>
    </header>
  )
}

export default Header;
