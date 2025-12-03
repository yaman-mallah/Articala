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
            <Link to={'/faq'} className="headlineMid" href="">
                FAQs
            </Link>
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
        <li>
            <Link to={'/explore'} className="headlineMid" href="">
                Explore
            </Link>
        </li>
    </ul>
  )
}

export default NavBarList