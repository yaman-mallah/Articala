
const NavBarList = ({isVertical}) => {
  return (
    <ul className={isVertical?"d-flex navList flex-column":"d-flex navList"}>
        <li>
            <a className="headlineMid" href="">
                Home
            </a>
        </li>
        <li>
            <a className="headlineMid" href="">
                Articles
            </a>
        </li>
        <li>
            <a className="headlineMid" href="">
                Vacancies
            </a>
        </li>
        <li>
            <a className="headlineMid" href="">
                About Us
            </a>
        </li>
        <li>
            <a className="headlineMid" href="">
                Contact
            </a>
        </li>
    </ul>
  )
}

export default NavBarList