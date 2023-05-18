import React, { useEffect, useState } from 'react';
import './Modal-icon-menu.css'

const ModalIconMenu = ({ handleUserChange }) => {
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        const storedCurrentUser = localStorage.getItem('currentUser');
        setCurrentUser(storedCurrentUser);
    }, []);

    return (
        <div className="modal-change-user">
            <div className='carret'></div>
            <h2>Ola, {currentUser}!</h2>
            <span>Bem vindo ao Projeto Clone Netflix</span>
            <span>Feito por Gabriel Gomes</span>
       
            <button onClick={handleUserChange} className='btn-change-user'>Mudar usuário</button>
        </div>
    );
};

export default ModalIconMenu;
