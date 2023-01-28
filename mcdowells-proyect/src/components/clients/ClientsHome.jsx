import '../../assets/clients/clientshome.css'
import welcome from '../../assets/images/welcome.png'
import mcTitle from '../../assets/images/title.png'
import logo from '../../assets/images/logo.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ClientsHome() {
    const navigate = useNavigate();
   
    return (
        <>
            <div className="container">
                <div className='leftContainer'></div>
                <div className="centerContainer">
                    <div className='topDiv'>
                        <img src={welcome} alt=" NOT FOUND" />
                        <img className='mcTitle' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <img className='logo' src={logo} alt='NOT FOUND' />
                    <div className='bottomDiv'>
                        <button className='start' onClick={() => navigate(`/menus`)}>EMPEZAR PEDIDO</button>
                    </div>
                </div>
                <div className='rigthContainer'>
                </div>
            </div>
        </>
    )
}

export default ClientsHome;
