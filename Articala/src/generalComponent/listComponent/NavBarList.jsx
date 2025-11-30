import { Link } from "react-router"

const NavBarList = ({isVertical}) => {
  return (
    <ul className={isVertical?"d-flex navList flex-column":"d-flex navList"}>
        <li>
            <Link to={'/'} className="headlineMid" href="">
                Home
            </Link>
        </li>
        <li>
            <Link to={'/jobs'} className="headlineMid" href="">
                jobs
            </Link>
        </li>
        <li>
            <a className="headlineMid" href="">
                FAQs
            </a>
        </li>
        <li>
            <Link to={'/about-us'} className="headlineMid" href="">
                About Us
            </Link>
        </li>
        <li>
            <Link to={'/contact'} className="headlineMid" href="">
                Contact
            </Link>
        </li>
    </ul>
  )
}

export default NavBarList