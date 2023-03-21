import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './DoctorNavElement'
const DoctorNavbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/DoctorProfile.js" activeStyle>
            Profile
          </MenuLink>
          <MenuLink to="/DoctorNotification.js" activeStyle>
            Notifications
          </MenuLink>
          <MenuLink to="/DoctorAppointments.js" activeStyle>
            Appointments
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default DoctorNavbar