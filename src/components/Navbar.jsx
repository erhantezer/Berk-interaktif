import { useState, useRef, useEffect } from "react";
import logo from "../assets/berk-logo-1.png";
import { FaBars } from "react-icons/fa";
import { links, social } from "../helper/data";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight)
    // const linksHeight = 168;
    show ? (linksContainerRef.current.style.height = `${linksHeight}px`) :
      (linksContainerRef.current.style.height = "0px");
  }, [show]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <NavLink to={url}>{icon}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar