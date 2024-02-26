import './our.scss'
import exspresso from '../../assets/img/expresso.png'

function Our() {
    return (
        <>
        <section className="our">
            <div className="container">
                <div className="background"></div>
                <ul className="our__list">
                    <li className="our__item">
                        <img src={exspresso} alt="exspresso" className="our__pic" />
                        <h2 className="our__heading">Gran Espresso</h2>
                        <p className="our__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </li>
                    <li className="our__item">
                        <img src={exspresso} alt="exspresso" className="our__pic" />
                        <h2 className="our__heading">Gran Espresso</h2>
                        <p className="our__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </li>
                    <li className="our__item">
                        <img src={exspresso} alt="exspresso" className="our__pic" />
                        <h2 className="our__heading">Gran Espresso</h2>
                        <p className="our__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </li>
                    <li className="our__item">
                        <img src={exspresso} alt="exspresso" className="our__pic" />
                        <h2 className="our__heading">Gran Espresso</h2>
                        <p className="our__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Our;