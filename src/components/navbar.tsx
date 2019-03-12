import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../styles/colors'

export const Navbar = () => (
  <NavbarWrapper>
    <NavbarItem exact to="/" activeClassName="active">
      GO HOME
    </NavbarItem>
    <NavbarItem to="/route1" activeClassName="active">
      GO TO ROUTE 1
    </NavbarItem>
    <NavbarItem to="/random-route" activeClassName="active">
      NOT EXISTING ROUTE
    </NavbarItem>
  </NavbarWrapper>
)

const NavbarWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 50px;
  background-color: ${colors.aquaIsland};
`

const NavbarItem = styled(NavLink)`
  font-size: 16px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${colors.newsBeige};
  background-color: rgba(255, 255, 255, 0.2);
  &:hover {
    background-color: ${colors.newsBeige};
  }
  &.active {
    background-color: ${colors.newsBeigeDark};
  }
`
