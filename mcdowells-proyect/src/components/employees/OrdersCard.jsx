import { useState } from 'react';
import '../../assets/employees/orderCard.css';
import { useUserContext } from '../../context/User';
import OrdersManager from '../../services/order.Api';



const OrdersCard = ({ ordersDetail, filtered, update }) => {

  const contexUser = useUserContext()

  let status = '';

  const nextStatus = async (one) => {

    const token = contexUser.user.token
    if (status !== 5) {
      OrdersManager.patchOrderDetails(token, one)
      update()
    }
  }

  return (
    <>
      {filtered.map(one => (
        <div className="card_container">
          <div className="card">
            <div className="numOrder">
              <p className='orderNum'>Num order: {one}</p>
            </div>
            {ordersDetail.filter(orderDetail => (orderDetail.id_order === one))
              .map(order =>
                <>
                  <p className='none'>{status = order.id_status}</p>
                  <p className="orderName"> •{order.name}</p>
                  <p className="productQ">Cantidad: {order.units}</p>

                </>

              )}
          </div>
          {(contexUser.user.role === "admin" && status !== 5) ||
            (contexUser.user.role === "waiter" && status !== 5) ||
            (contexUser.user.role === "chef" && status !== 3) ?
            <button className='next' onClick={() => nextStatus(one)}>NEXT STATUS</button> : <></>}
          <p className='divisor'>--------------------</p>
        </div>
      ))
      }
    </>
  )
}

export default OrdersCard;