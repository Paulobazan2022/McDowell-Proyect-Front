import React from 'react';
import details from '../../assets/images/details.png'
import '../../assets/clients/productdetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


function ProductDetails() {

    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);
    const { id_product } = useParams();
    const server = `http://localhost:3001/api/menus/${id_product}`;


    useEffect(() => {
        const getMenu = async () => {
            const response = await axios.get(server);
            setMenu(response.data);
            console.log(response.data);
        }
        getMenu();
    }, [])

    return (
        <>
            <div className="containerDetails">
                <div className='leftContainerDetails'></div>
                <div className="centerContainerDetails">
                    <div className='topDetails'>
                        <img className='detailsTitle' src={details} alt='NOT FOUND' />
                    </div>
                    {menu.map((one) =>
                        <div className='detailsContainer' key={one.id_product}>
                        <p className='menu'>{one.name}</p>

                            <div className='centerDetails'>
                                <img className='detailsMc' src={one.image} alt='NOT FOUND' />
                                <p className='pDetails'>
                                    {one.description}
                                </p>
                            </div>
                            <p className='menuPrice'>Precio: {one.price}€</p>

                        </div>
                    )}
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

/*
                                Hamburguesa de tierna carne de vaca Wagyū, hecha en plancha Jasper a 180ºC para
                                conseguir el punto exacto.
                                <br />
                                Con queso parmesano y queso americano ligeramente ahumado, bacon crispy, lechuga batavia, pomodoro y cebolla morada.
                                <br />
                                Todo ello acompañado de nuestras patatas bastón ecológicas cortadas en el día y cocinadas en aceite de oliva.

*/