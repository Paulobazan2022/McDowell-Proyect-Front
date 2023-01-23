import React from 'react';
import resumen from '../../assets/images/resumen.png'
import pedido from '../../assets/images/resumen2.png'
import '../../assets/clients/cart.css'
import { useNavigate } from 'react-router-dom';
//<img className='mcJr' src='https://cdn-icons-png.flaticon.com/512/1581/1581006.png' alt='NOT FOUND' />



function Cart() {

    const navigate = useNavigate();

    return (
        <>
            <div className="containerCart">
                <div className='leftContainerCart'></div>
                <div className="centerContainerCart">
                    <div className='topCart'>
                        <img className='resumenimg' src={resumen} alt='NOT FOUND' />
                        <img className='pedido' src={pedido} alt='NOT FOUND' />
                    </div>
                    <div className='centerCart'>
                        <div className='topCenterCart'>

                            <p className='menuTitle'>Menú McDowell's Jr</p>

                            <div className='topCenterCartDiv'>
                                <img className='mcJrCart' src='https://cdn-icons-png.flaticon.com/512/7451/7451012.png' alt='NOT FOUND' />
                                <button className='menos'>-</button>
                                <div className='cantidad'></div>
                                <button className='mas'>+</button>
                                <div className='precioUd'></div>
                                <div className='precioTotMen'></div>
                            </div>
                        </div>
                        <div className='bottomCenterCart'>

                            <p className='menuTitle'>Menú McDowell's</p>

                            <div className='bottomCenterCartDiv'>
                                <img className='mcCart' src='https://cdn-icons-png.flaticon.com/512/9425/9425772.png' alt='NOT FOUND' />
                                <button className='menos'>-</button>
                                <div className='cantidad'></div>
                                <button className='mas'>+</button>
                                <div className='precioUd'></div>
                                <div className='precioTotMen'></div>
                            </div>
                        </div>
                        <p className='total'> TOTAL: { } € </p>
                    </div>
                    <div className='bottomCart'>
                        <button className='resumeCart' onClick={ ()=>navigate(`/menus`)}>
                            REANUDAR PEDIDO
                        </button>
                        <button className='finishCart'>
                            FINALIZAR PEDIDO
                        </button>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default Cart;
