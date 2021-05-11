import React from 'react';
import loading from '../../../assets/images/loading.gif'

const Preloader = (props) => {
    return (
        <div>
            <img src={loading} alt="loading"/>
        </div>
    )
}

export default Preloader