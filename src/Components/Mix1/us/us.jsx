import './us.scss'
import cofee from '../../assets/img/coffee-bean.svg'

function Us() {
    return (
        <>
            <section className="us">
                <div className="container">
                    <div className="us__info">
                        <h3 className="us__heading">Why choose us?</h3>
                        <p className="us__text">A large part of our role is choosing which particular coffees will be featured
                            in our range. This means working closely with the best coffee growers to give
                            you a more impactful experience on every level.</p>
                    </div>
                    <ul className="us__list">
                        <li className="us__item">
                            <img src={cofee} alt="cofe" className="us__photo" width='72' height='72' />
                            <h3 className="us__head">Best quality</h3>
                            <p className="us__tex">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </li>
                        <li className="us__item">
                            <img src={cofee} alt="cofe" className="us__photo" width='72' height='72' />
                            <h3 className="us__head">Best quality</h3>
                            <p className="us__tex">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </li>
                        <li className="us__item">
                            <img src={cofee} alt="cofe" className="us__photo" width='72' height='72' />
                            <h3 className="us__head">Best quality</h3>
                            <p className="us__tex">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Us;