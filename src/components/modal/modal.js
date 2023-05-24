import './modal.css'

const Modal = ({ name, overview, setShowModal, backdrop }) => {
    document.body.style.overflow = 'hidden';

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto';
        setShowModal(false);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div onClick={handleCloseModal} className='closeModal'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                        <path d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"></path>
                    </svg>
                </div>


                <div className="modal-content-inner">
                    <div className='poster' style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'top',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`,
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className='overviewModal'>
                            <div className='btn-play-modal'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" width="28" height="24">
                                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                </svg>
                                <span>Assistir</span>
                            </div>
                        </div>

                    </div>

                    <div className='pos-post'>
                        <h2>{name}</h2>
                        <p>{overview}</p>
                        <p>Lembrando que o projeto é apenas um Clone, não é possível assistir nenhum filme.</p>
                        <p>Todos os direitos são revervados a Netflix.</p>

                    </div>

                </div>
            </div>
        </div >

    );
}

export default Modal;