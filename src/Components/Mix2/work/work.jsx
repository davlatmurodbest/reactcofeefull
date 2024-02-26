import './work.scss'
import cofoeheart from '../../assets/img/heart.png'

function Work() {
    return (
        <>
        <section className='work'>
            <div className="container">
                <div className="work__info">
                    <h3 className="work__heading">Uncompromising quality</h3>
                    <p className="work__text">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
                <img src={cofoeheart} alt="cofe" className="work__pic" width='445' height='474' />
            </div>
        </section>
        </>
    )
}

export default Work;