import React, {useState} from 'react'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
    <div className='navbar'>
        <div className="container">
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Courses</li>
                <li>Pricing</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar