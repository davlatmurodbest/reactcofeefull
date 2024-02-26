import './our.scss'
import kofechi from '../../assets/img/kulol.png'

function Our() {
    return (
        <>
        <section className="ourr">
            <div className="container">
                <img src={kofechi} alt="kovechi" className="ourr__pic" />
                <div className="ourr__info">
                    <h2 className="ourr__heading">jasdjgscshjsc</h2>
                    <p className="ourr__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, architecto. Maiores dolores hic suscipit fugiat deserunt nihil inventore dolor illo!</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Our;