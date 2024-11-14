import React from 'react'
import { Aboutme, ContactMe, Navbar, Profile, Socials, Skill } from "./data"

function Grid() {
  return (
    <div>
      <Navbar />
      <div>
        <Aboutme />
        <Profile />
        <Skill />
        <Aboutme />
        <ContactMe />
        <Socials />
      </div>
    </div>
  )
}

export default Grid