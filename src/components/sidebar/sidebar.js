import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeClassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="gray" />
        </NavLink>
        <NavLink
          className="about-link"
          exact="true"
          activeClassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="gray" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/itsVasty"
          >
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/vasty"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
