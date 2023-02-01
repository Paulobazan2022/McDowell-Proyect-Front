import React from 'react';
import details from '../../assets/images/details.png'
import '../../assets/clients/productdetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useAppContext } from '../../context/OrderContext'

function ProductDetails() {
    const context = useAppContext()

    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);
    const { id_product } = useParams();
    const server = `http://localhost:3001/api/products/${id_product}`;


    useEffect(() => {
        const getMenu = async () => {
            const response = await axios.get(server);
            setMenu(response.data);

        }
        getMenu();
    }, [])

    const addToCart = () => {
        const ifExist = context.cart.find((product) => product.id_product === menu.id_product)
        if (ifExist) {
            const setProd = context.cart.map((product) => product.id_product === ifExist.id_product ? {
                ...product, units: product.units + 1,
                total: product.price * (product.units + 1)
            } : product)
            context.setCart(setProd)
            console.log(setProd)
            

            const setTotal = context.totalPayment.map((x)=> {return {totalPay : x.totalPay + menu.price
            }})
            context.setTotalPayment(setTotal) 
        }
        else {
            context.cart.push({
                ...menu,
                units: 1,
                total: menu.price
            })
            const setTotal = context.totalPayment.map((x)=> {return {totalPay : x.totalPay + menu.price
            }})
            context.setTotalPayment(setTotal) 
            
        }
    
    }

    


    return (
        <>
            <div className="containerDetails">
                <div className='leftContainerDetails'></div>
                <div className="centerContainerDetails">
                    <div className='topDetails'>
                        <img className='detailsTitle' src={details} alt='NOT FOUND' />
                    </div>
                    {/*}{menu.map((one) =>
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
                    )} */}

                    <div className='detailsContainer' key={menu.id_product}>
                        <p className='menu'>{menu.name}</p>

                        <div className='centerDetails'>
                            <img className='detailsMc' src={menu.image} alt='NOT FOUND' />
                            <p className='pDetails'>
                                {menu.description}
                            </p>
                        </div>
                        <p className='menuPrice'>Precio: {menu.price}€</p>

                    </div>

                    <div className='bottomMenu'>
                        <div className='bottomLeftDetails' >
                            <button className='add' onClick={() => addToCart()}>AÑADIR AL PEDIDO</button>
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