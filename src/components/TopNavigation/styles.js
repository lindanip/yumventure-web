import styled from 'styled-components'

export const NavigationBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
  z-index: 3;

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.9);
  }
`

export const NavigationBarItems = styled.nav`
  max-width: 1281px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLinks = styled.div`
`

export const NavLink = styled.a`
  color: var(--bg-dark);
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`

export const Img = styled.img`
  width: 99px;
`

