import React from 'react'
import './CommonNavBar.css'

export default function CommonNavBar() {
    return (
        <div>
            <div className='background__logobox logo'>
                <svg height="210" width="400" className="filter">
                    <path fill="#fff" d="M 100 300 L 100 250 L 350 250 C 250 250 300 450 100 265 " transform="translate(-100 -250)" />
                </svg>
                <div className='background__logobox__logoimage'>
                    <a href='#nav-container' className='btn btn-light' data-toggle='collapse'><i class="fas fa-bars" style={{ color: 'black' }}></i></a>
                    <div className='logo-name'>
                        <div className='background__logobox__Swetha'>Swetha</div>
                        <div className='background__logobox__dentistry'>DENTISTRY</div>
                    </div>
                </div>
            </div>

            <div className='collapse navbar-content' id='nav-container'>
                <ul className='navbar-list'>
                    <li>Experts</li>
                    <li>OurExperts</li>
                    <li>About Us</li>
                    <li>Treatment</li>
                    <li>Services</li>
                    <li>WorldClassExperience</li>
                </ul>
            </div>
        </div>
    )
}
