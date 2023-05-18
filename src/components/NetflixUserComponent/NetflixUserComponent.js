import React, { useState, useEffect } from 'react';
import './NetflixUserComponent.css';

const NetflixUserComponent = ({ handleSelectUser }) => {
    const [username, setUsername] = useState('');
    const [userList, setUserList] = useState([]);
    const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers && !localStorageLoaded) {
            setUserList(JSON.parse(storedUsers));
            setLocalStorageLoaded(true);
        }
    }, [localStorageLoaded]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(userList));
    }, [userList]);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleUsernameSubmit = () => {
        if (username.trim() === '') {
            return;
        }
        const newUser = {
            username: username,
            profileImage:
                'http://occ-0-1665-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaUylZY8mQBjvqsaNma18u8OQAMHyR7wWsXFJqdXiahaHze0b3zkX_DRuvlABvM7BFfOBqpxgrYJgHQTz0MvrZkkjoMwpdPL86ty.png?r=bb8',
        };

        setUserList((prevUserList) => [...prevUserList, newUser]);
        setUsername('');
    };

    const handleDeleteUser = (index) => {
        const updatedUserList = userList.filter((_, i) => i !== index);
        setUserList(updatedUserList);
    };

    const handleProfileIconClick = (username) => {
        localStorage.setItem('currentUser', username);
    };

    const renderUserList = () => {
        return (
            <div className="users-list">
                {userList.map((user, index) => (
                    <div key={index} className="user">
                        <button onClick={() => handleDeleteUser(index)}>X</button>
                        <img
                            src={user.profileImage}
                            alt="Profile Icon"
                            onClick={() => {
                                handleProfileIconClick(user.username);
                                handleSelectUser();
                            }}

                        />
                        <h1>{user.username}</h1>
                    </div>
                ))}
            </div>
        );
    };

    const renderUserForm = () => {
        return (
            <div className='howIs'>
                <h1>Quem está assistindo?</h1>
                <input
                    type="text"
                    placeholder="Digite o seu nome"
                    value={username}
                    onChange={handleUsernameChange}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleUsernameSubmit();
                        }
                    }}
                />
                <button onClick={handleUsernameSubmit}>Confirmar</button>
            </div>
        );
    };

    return (
        <div className="netflix-user-component">
            <div className="user-container">
                {renderUserForm()}
                {renderUserList()}
            </div>
        </div>
    );
};

export default NetflixUserComponent;
