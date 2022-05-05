import React from 'react'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <div className="text">
                    <p>Always</p>
                </div>
                <h1>The Best</h1>
                <h1>The Funniest</h1>
                <button className='btn'>Log In</button>
                <button className='btn'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Hero