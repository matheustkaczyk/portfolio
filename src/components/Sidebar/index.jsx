import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';

const Sidebar = () => {
  return(
    <aside>
      <p>"LOGO"</p>
      <nav>
        <ul>
          <li><AiFillHome /></li>
          <li><AiFillInfoCircle /></li>
          <li>Projetos</li>
        </ul>
      </nav>
      <div>
        <li>Linkedin</li>
        <li>Github</li>
        <li>Whatsapp</li>
      </div>
    </aside>
  )
}

export default Sidebar;
