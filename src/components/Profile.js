import React from 'react';
import './Profile.css'

function Profile({name, email}) {
    return (
        <section className="profile">
            <h2>Привет, Абунасыр!</h2>
            <div className="profile__box">
                <div className="profile__name">
                    <p>Имя</p>
                    <p>Абунасыр</p>
                </div>
                <div className="profile__email">
                    <p>E-mail</p>
                    <p>abunasyr7@yandex.kz</p>
                </div>
            </div>
            <div className="profile__link">
                <a href="#" className="profile__edit">Редактировать</a>
                <a href="#" className="profile__exit">Выйти из аккаунта</a>
            </div>
        </section>
    )
}

export default Profile;