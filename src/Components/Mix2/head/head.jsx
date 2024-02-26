import './head.scss'
import headquarter from '../../assets/img/Combined.svg'

function Head() {
    return(
        <>
        <section className="head">
            <div className="container">
                <h5 className="head__heading">Our headquarters</h5>
                <ul className="head__list">
                    <li className="head__item">
                        <img src={headquarter} alt="headquarter" className="head__pic" width='40' height='49' />
                        <h6 className="head__head">United Kingdom</h6>
                        <p className="head__text">68 Asfordby Rd</p>
                        <p className="head__text">Alcaston </p>
                        <p className="head__text">SY6 1YA  </p>
                        <p className="head__text">+44 1241 918425</p>
                    </li>
                    <li className="head__item">
                        <img src={headquarter} alt="headquarter" className="head__pic" width='40' height='49' />
                        <h6 className="head__head">United Kingdom</h6>
                        <p className="head__text">68 Asfordby Rd</p>
                        <p className="head__text">Alcaston </p>
                        <p className="head__text">SY6 1YA  </p>
                        <p className="head__text">+44 1241 918425</p>
                    </li>
                    <li className="head__item">
                        <img src={headquarter} alt="headquarter" className="head__pic" width='40' height='49' />
                        <h6 className="head__head">United Kingdom</h6>
                        <p className="head__text">68 Asfordby Rd</p>
                        <p className="head__text">Alcaston </p>
                        <p className="head__text">SY6 1YA  </p>
                        <p className="head__text">+44 1241 918425</p>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Head;