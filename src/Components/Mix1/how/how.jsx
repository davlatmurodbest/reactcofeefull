import './how.scss'

function How() {
    return (
        <>
            <section className="how">
                <div className="container">
                    <h4 className="how__heading">How it works</h4>
                    <span className='how__line'>
                        <span className="how__circ"></span>
                        <span className="how__circ"></span>
                        <span className="how__circ"></span>
                    </span>
                    <ul className="how__list">
                        <li className="how__item">
                            <p className="how__num">01</p>
                            <h4 className="how__head">Pick your <br /> coffee</h4>
                            <p className="how__text">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                        </li>
                        <li className="how__item">
                            <p className="how__num">02</p>
                            <h4 className="how__head">Choose the frequency</h4>
                            <p className="how__text">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                        </li>
                        <li className="how__item">
                            <p className="how__num">03</p>
                            <h4 className="how__head">Receive and enjoy!</h4>
                            <p className="how__text">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                        </li>
                    </ul>
                    <a href="#link" className="hero__link">Create your plan</a>
                </div>
            </section>
        </>
    )
}

export default How;