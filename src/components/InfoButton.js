import React from 'react';

function InfoButton({name}) {
    return (
        <div className="info-button">
            <p className="info-button__text">{name}</p>
        </div>
    )
}

export default InfoButton;