import error from '../../assets/img/404error-removebg-preview.png'

export default function Error() {
    return (
        <>
        <div className="container" style={{display: 'flex', textAlign: 'center', }}>
            <img src={error} alt="error" className="eroor" width={900} height={200} style={{marginLeft: '200px'}}/>
        </div>
        </>
    )
}