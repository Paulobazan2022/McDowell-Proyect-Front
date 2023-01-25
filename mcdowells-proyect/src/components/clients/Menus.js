import React from 'react';
import mcTitle from '../../assets/images/title.png'
import '../../assets/clients/menus.css'
import { useNavigate } from 'react-router-dom';


function Menus() {
    const navigate = useNavigate();
    return (
        <>
            <div className="containerMenu">
                <div className='leftContainerMenu'></div>
                <div className="centerContainerMenu">
                    <div className='topMenu'>
                        <img className='mcTitle' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <div className='centerMenu'>
                        <div className='centerLeft'>
                            <img className='mcJr' src='https://cdn-icons-png.flaticon.com/512/7451/7451012.png' alt='NOT FOUND' />
                            {/*
                            Hay que tener en cuenta que hay que meter el id dinámico en ambos botones
                             */}
                            <button className='mcJrBtn' onClick={() => navigate(`/details`)}>
                                MENÚ McDOWELL'S JR
                                4,25€
                            </button>
                        </div>
                        <div className='centerRight'>
                            <img className='mcBig' src='https://cdn-icons-png.flaticon.com/512/9425/9425772.png' alt='NOT FOUND' />
                            <button className='mcBtn' onClick={() => navigate(`/details`)} >
                                MENÚ McDOWELL'S
                                8,50€
                            </button>

                        </div>
                    </div>
                    <div className='bottomMenu'>
                        <div className='bottomLeft' >
                            <p className='resumen' onClick={() => navigate(`/Cart`)}>Ver resumen del pedido</p>
                        </div>
                        <div className='bottomRight' >
                            <p className='total' >TOTAL: { }€</p>
                        </div>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default Menus;
