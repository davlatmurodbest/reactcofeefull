import React from 'react'
import './many.scss'
import upto from '../../assets/img/upto.svg'

export default function Many() {

    let firstapi = [
        {
            id: 0,
            title: 'Capsule',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat!',
        },
        {
            id: 1,
            title: 'Filter',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat!',
        },
        {
            id: 2,
            title: 'Expresso',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat!',
        },
    ]

    return (
        <>
            <section className="many">
                <div className="container">
                    <div className="many__bar">
                        <p className="many__text" ><span className="many__num" >01</span>Preferences</p>
                        <p className="many__text" ><span className="many__num">02</span>Bean Type</p>
                        <p className="many__text" ><span className="many__num">03</span>Quantity</p>
                        <p className="many__text" ><span className="many__num">04</span>Grind Option</p>
                        <p className="many__text" ><span className="many__num">05</span>Deliveries</p>
                    </div>
                    <div className="many__info">
                        <div className="many__box">
                            <h4 className="many__qy animation" >How do you drink your coffee? <img src={upto} alt="up" className="many__pic" /></h4>
                            <div className="many__many">
                                <div className="many__bob" >
                                    <h5 className="many__head">Capsule</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Filter</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Expresso</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="many__box">
                            <h4 className="many__qy animation" >What type of coffee? <img src={upto} alt="up" className="many__pic" /></h4>
                            <div className="many__many">
                                <div className="many__bob" >
                                    <h5 className="many__head">Single Origin</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Decaf</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Blended</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="many__box">
                            <h4 className="many__qy animation" >How much would you like? <img src={upto} alt="up" className="many__pic" /></h4>
                            <div className="many__many">
                                <div className="many__bob" >
                                    <h5 className="many__head">250g</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">500g</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">1000g</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="many__box">
                            <h4 className="many__qy animation" >Want us to grind them?<img src={upto} alt="up" className="many__pic" /></h4>
                            <div className="many__many">
                                <div className="many__bob" >
                                    <h5 className="many__head">Wholebean</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Filter</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Cafetiére</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="many__box">
                            <h4 className="many__qy animation" >How often should we deliver? <img src={upto} alt="up" className="many__pic" /></h4>
                            <div className="many__many">
                                <div className="many__bob" >
                                    <h5 className="many__head">Every week</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Every 2 weeks</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                                <div className="many__bob" >
                                    <h5 className="many__head">Every month</h5>
                                    <p className="many__tex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}