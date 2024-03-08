import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars, FaTimes } from 'react-icons/fa';
import SchRegistrationButton from '../main_page/main_page';
// import { Bio } from '../../data/constants';
import { Link } from 'react-router-dom';
// import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };
  // const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20', cursor: 'pointer' }}>
            <img src="" alt="" style={{ size: "2rem", height: "70px" }} /> <p style={{ fontFamily: 'Calistoga,cursive', color: '#7E77c3', fontSize: '3vw', marginLeft: '15px' }}>P<span style={{ fontFamily: 'Calistoga,cursive', color: 'black' }}>2</span>P</p>  <p style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, marginRight: '10px', marginLeft: '10px', color: '#3473c8', fontSize: '2.6vw', paddingTop: '3%' }}>TECH</p>
            <p style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, fontSize: '2.6vw', paddingTop: '3%' }}>W<span style={{ fontFamily: 'El Messiri, sans-serif', fontWeight: 700, color: '#3473c8' }}>O</span>RKS</p>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavItems>

          <Link to="/" style={{ textDecoration: "none" }}><NavLink><p className='rrrr'>Home</p></NavLink></Link>

          <Link to='/blog' style={{ textDecoration: "none" }}><NavLink><p>Blog</p></NavLink></Link>
          <Link to='/p2p' style={{ textDecoration: "none" }}><NavLink><p>p2p</p></NavLink></Link>
          <Link to='/courses' style={{ textDecoration: "none" }}><NavLink><p>Courses</p></NavLink></Link>
          <Link to='/about' style={{ textDecoration: "none" }}><NavLink><p>About</p></NavLink></Link>
          <Link to='/contact' style={{ textDecoration: "none" }}><NavLink><p>Contact</p></NavLink></Link>
          <SchRegistrationButton />
        </NavItems>



        <MobileMenu isOpen={isOpen}>
          <MobileLink onClick={handleLinkClick} to="/">Home</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/blog">Blog</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/p2p">p2p</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/courses">Courses</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/about">About</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/contact">Contact</MobileLink>
          <MobileLink onClick={handleLinkClick} to="/schregister"><SchRegistrationButton  /></MobileLink>
          
        </MobileMenu>

      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
