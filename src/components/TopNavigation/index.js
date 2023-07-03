import React, { useEffect, useRef } from 'react'
import {
  Img,
  NavigationBarItems,
  NavLink,
  NavLinks,
  NavigationBar
} from './styles'

function TopNavigation() {
  const navbarRef = useRef(null)

  const handleScroll = () => {
    if (navbarRef.current) {
      if (window.scrollY > 0) {
        navbarRef.current.classList.add('scrolled')
      } else {
        navbarRef.current.classList.remove('scrolled')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <NavigationBar ref={navbarRef}>
      <NavigationBarItems>
        <Img src={require('../../assets/yumventure_logo_transparent_crop.png')} />
        {/* <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Recipes</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks> */}
      </NavigationBarItems>
    </NavigationBar>
  );
}

export default TopNavigation;
