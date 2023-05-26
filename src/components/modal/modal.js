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