import React, { useState } from 'react';
import mcTitle from '../../assets/images/title.png'
import '../../assets/clients/menus.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



function Menus() {
    const navigate = useNavigate();
    const [menus, setMenus]  = useState([]);
    const server = `http://localhost:3001/api/menus/all-menus`;

    useEffect(() => {
        const getMenus = async () => {
            const response = await axios.get(server);
            setMenus(response.data);
            console.log(response.data);
        }
        getMenus();
    }, [])
    return (
        <>
            <div className="containerMenus">
                <div className='leftContainerMenu'></div>
                <div className="centerContainerMenu">
                    <div className='topMenu'>
                        <img className='mcTitle' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <div className='centerMenu'>
                        {menus.map((menu) => 
                            
                            <div key={menu.id_product} className='menuContainer'>
                            <img className='mcBig' src={menu.image} alt='NOT FOUND' />
                            {/*
                            Hay que tener en cuenta que hay que meter el id dinámico en ambos botones
                             */}
                            <button className='mcBtn' onClick={() => navigate(`/menus/${menu.id_product}`)}>
                                {menu.name}
                                <br/>
                                {menu.price}
                            </button>
                            </div>

                        )}

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
