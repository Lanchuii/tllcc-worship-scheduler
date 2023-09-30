import React, { useRef } from 'react'

const NavBar = () => {
  return (
    <nav className='nav'>
      <a href="/">TLLCC Worship Team Scheduler</a>
      <ul>
        <li>
          <a href="/">Band</a>
        </li>
        <li>
          <a href="/">Songs</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar