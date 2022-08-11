import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav divider'>
        <Link to='/'><strong>Home</strong></Link>
        <Link to='/todo'>To-Do</Link>
        <Link to='/mood'>Moods</Link>
    </div>
  )
}

export default Nav