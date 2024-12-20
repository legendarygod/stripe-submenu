import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
    return( 
            <section className='hero' onMouseOver={closeSubmenu}>
                <div className='hero-center'>
                    <article className='hero-info'>
                        <h1>Payments infrastructure for the internet</h1>
                        <p>
                            Millions of gay men of all walks of life use this app for onr thing only: to be free. to be themselves. to be gay
                        </p>
                        <button className='btn'>Start Now</button>
                    </article>
                    <article className='hero-images'>
                        <img src={phoneImg} className='phonr-img' alt='phone'/>
                    </article>
                </div>
            </section>
    )
}

export default Hero
