import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const PatientNavbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/Profile.js" activeStyle>
            Profile
          </MenuLink>
          <MenuLink to="/Notification.js" activeStyle>
            Notifications
          </MenuLink>
          <MenuLink to="/Appointments.js" activeStyle>
            Appointments
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default PatientNavbar