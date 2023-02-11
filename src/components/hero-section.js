import React from 'react';
import dev from '../images/dev.png';
import sphere from '../images/sphere.png'

const Hero = () => {
    return (
        <div className='Hero-section'>
            <p className='hero-subtitle'>Are you looking for a efficient online code editor?</p>
            <h1 className='hero-title'>Welcome To CodeRay Editor</h1>
            <p>Look no further! CodeRay offers a fast and intuitive coding experience so you can stay productive and creative. With CodeRay, you can write clean JavaScript and CSS code</p>
            <p>and experience the power of smooth coding</p>
            <a className='CTA'>Try CodeRay Now</a>
            <img className='hero-image' src={dev} alt="" />
            <img className='hero-image_two' src={sphere} alt="" />
        </div>
    )
}

export default Hero