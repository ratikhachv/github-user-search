import React, { useContext } from 'react'
import "./footer.css"
import { Context } from './Context'
import location from './imgs/location.png'
import blog from './imgs/blog.png'
import twitter from './imgs/twitter.png'
import office from './imgs/office.png'

export default function Footer() {
    const context = useContext(Context)
  return (
    <div className='footer' >
        <div className="footer-column" >
            <div>
                <img src={location} alt="" />
                {context.location != null ? <p>{context.location}</p> : <p className="not-available">Not Available</p> }
            </div>
            <div>
                <img src={blog} alt="" />
                <a href={context.blog}>
                    {context.blog.length > 1 ? <p>{context.blog}</p> : <p className="not-available">Not Available</p> }
                </a>
            </div>
        </div>
        <div className="footer-column">
            <div>
                <img src={twitter} alt="" />
                <a href={context.twitter}>
                    {context.twitter != null ? <p>{context.twitter}</p> : <p className="not-available">Not Available</p> }
                </a>
            </div>
            <div>
                <img src= {office} alt="" />
                <a href={context.office}>
                    {context.office != null ? <p>{context.office}</p> : <p className="not-available">Not Available</p> }
                </a>
            </div>
        </div>
    </div>
  )
}
