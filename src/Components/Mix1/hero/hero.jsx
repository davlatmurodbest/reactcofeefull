import React from 'react';
import './hero.scss'

function Hero() {
    let momo = React.useRef()

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">Great coffee made simple.</h1>
                        <p className="hero__text">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                        <button type='button'  className="hero__link" onClick={() => {
                            momo.current.classList.add('modal--open')
                        }}>Create your plan</button>
                    </div>
                    <form className="modal" ref={momo}>
                        <div className="modal__inner">
                            <button className="btn" style={{color: 'white'}} onClick={() => {
                                momo.current.classList.remove('modal--open')
                            }}
                            >X</button>
                            <h2 className="modal__heading">
                                Order Summary
                            </h2>
                            <h3 className="modal__head">
                                “I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”
                            </h3>
                            <p className="modal__text">
                            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                            </p>
                            <div className="flex" style={{display: 'flex', gap: '19px'}}>
                                <p className="modal__stil">$14.00/ mo</p>
                            <button className='submit' type='submit' > Checkout</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Hero;