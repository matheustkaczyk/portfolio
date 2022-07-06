import { AiFillHome, AiFillInfoCircle, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import Logo from '../../images/web-development.svg?component';

const Sidebar = () => {
  return(
    <aside>
      <Logo />
      <nav>
        <ul>
          <li><AiFillHome /></li>
          <li><AiFillInfoCircle /></li>
          <li><BsTools /></li>
          <li><MdOutlineWork /></li>
        </ul>
      </nav>
      <div className='social'>
        <li><AiFillLinkedin className='linkedin' /></li>
        <li><AiFillGithub className='github' /></li>
        <li><AiOutlineWhatsApp className='whatsapp' /></li>
      </div>
    </aside>
  )
}

export default Sidebar;
