import '../../assets/employees/orderCard.css';
import axios from 'axios'



const OrdersCard = ({ordersDetail, filtered}) => {

  const nextStatus = async () => {
    // console.log(order.id_status)
    // if (orderDetail.id_status !== 5) {
      //  await axios.patch(`http://localhost:3001/api/status/setStatus/${one}`)
    // } 
  }
  return (
    <>
        {filtered.map(one =>(
            <div className="card_container">
              <div className="card">
                <div className="numOrder">
                  <p className='orderNum'>Num order: {one}</p>
                </div>
                {ordersDetail.filter(orderDetail =>(orderDetail.id_order===one))
                .map(order =>
                <>
                  <p className="orderName"> •{order.name}</p>
                  <p className="productQ">Cantidad: {order.units}</p>
                </>
                )}
              </div>
              <button className='next' onClick={() => nextStatus()}>NEXT STATUS</button>
              <p className='divisor'>--------------------</p>
            </div>
          ))
        }
      </>
  )
}

export default OrdersCard;