import React from 'react'
import './StudentStyle.css'

const Student = (props) => {
  return (
    <div style={{ background: `url('${props.bgImg}') no-repeat center center/cover` }} className='student'>
        <div className="container">
            <div style={{ background: `url('${props.bgImg1}') no-repeat center center/cover` }} className="left"></div>
            <div style={{ background: `url('${props.bgImg2}') no-repeat center center/cover` }}className="right"></div>
        </div>

    </div>
  )
}

export default Student