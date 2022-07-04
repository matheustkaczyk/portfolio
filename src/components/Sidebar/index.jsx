import { AiFillHome, AiFillInfoCircle, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineWork } from 'react-icons/md';

const Sidebar = () => {
  return(
    <aside>
      <p>"LOGO"</p>
      <nav>
        <ul>
          <li><AiFillHome /></li>
          <li><AiFillInfoCircle /></li>
          <li><MdOutlineWork /></li>
        </ul>
      </nav>
      <div>
        <li><AiFillLinkedin /></li>
        <li>Github</li>
        <li>Whatsapp</li>
      </div>
    </aside>
  )
}

export default Sidebar;
