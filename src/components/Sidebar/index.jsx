import { AiFillHome, AiFillInfoCircle, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlineWork } from 'react-icons/md';
import Logo from '../../images/web-development.svg';

const Sidebar = () => {
  return(
    <aside>
      <nav>
        <ul>
          <li><AiFillHome /></li>
          <li><AiFillInfoCircle /></li>
          <li><MdOutlineWork /></li>
        </ul>
      </nav>
      <div className='social'>
        <li><AiFillLinkedin /></li>
        <li><AiFillGithub /></li>
        <li><AiOutlineWhatsApp /></li>
      </div>
    </aside>
  )
}

export default Sidebar;
