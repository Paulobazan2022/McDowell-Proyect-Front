import React from 'react';
import details from '../../assets/images/details.png'
import '../../assets/clients/productdetails.css'
import { useNavigate } from 'react-router-dom';


function ProductDetails() {

    const navigate = useNavigate();

    return (
        <>
            <div className="containerDetails">
                <div className='leftContainerDetails'></div>
                <div className="centerContainerDetails">
                    <div className='topDetails'>
                        <img className='detailsTitle' src={details} alt='NOT FOUND' />
                    </div>
                    {/*
                    Esta parte iría toda haciendo llamadas a la base de datos ya que la info estaría guardada en la tabla del producto.
                    Tanto la imagen como la descripción están puestos (de momento) directamente para poder controlar el espacio y tener 
                    una imagen de cómo se tendría que ver al introducir la información de la llamada.
                    La imagen también se tendría que traer por llamada a la base de datos.
                    */}
                    <div className='detailsContainer'>
                        <p className='menu'>Menú McDowell's</p>
                        <div className='centerDetails'>
                            <img className='detailsMcBig' src='https://cdn-icons-png.flaticon.com/512/9425/9425772.png' alt='NOT FOUND' />
                            <p className='pDetails'>
                                Hamburguesa de tierna carne de vaca Wagyū, hecha en plancha Jasper a 180ºC para
                                conseguir el punto exacto.
                                <br />
                                Con queso parmesano y queso americano ligeramente ahumado, bacon crispy, lechuga batavia, pomodoro y cebolla morada.
                                <br />
                                Todo ello acompañado de nuestras patatas bastón ecológicas cortadas en el día y cocinadas en aceite de oliva.
                            </p>
                        </div>
                    </div>
                    <div className='bottomMenu'>
                        <div className='bottomLeftDetails' >
                            <button className='add'>AÑADIR AL PEDIDO</button>
                        </div>
                        <div className='bottomRightDetails'>
                            <button className='select ' onClick={() => navigate(`/menus`)}>VOLVER A SELECCIÓN</button>

                        </div>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;
