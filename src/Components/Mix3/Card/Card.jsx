import "./Card.scss";

function Card() {
    return (
        <>
            <section className="card">
                <div className="container">
                    <div className="card__info">
                        <span className="card__line"></span>
                        <div className="card__box">
                            <div className="card__circle"></div>
                            <div className="card__circle"></div>
                            <div className="card__circle"></div>
                        </div>
                    </div>
                    
                    <ul className="card__list">
                        <li className="card__item">
                            <h2 className="item__heading">01</h2>
                            <h2 className="card__item__heading">Pick your
                                coffee</h2>
                            <p className="card__item__text">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                        </li>

                        <li className="card__item">
                            <h2 className="item__heading">02</h2>
                            <h2 className="card__item__heading">Choose the frequency</h2>
                            <p className="card__item__text">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                        </li>

                        <li className="card__item">
                            <h2 className="item__heading">03</h2>
                            <h2 className="card__item__heading">Receive and enjoy!</h2>
                            <p className="card__item__text">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Card;