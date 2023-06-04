import { useDispatch, useSelector } from 'react-redux'
import { INCREASE,REMOVE ,DECREASE} from './redux/actions/RegisterAction'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const getState = useSelector((state)=>state);

  console.log(getState);
  const dispatch = useDispatch();
  
  const remove = (item)=>{
    dispatch(REMOVE(item));
}

const inc = (item)=>{
  dispatch(INCREASE(item));
}

const dec = (item)=>{
  dispatch(DECREASE(item))
}
var total=0;
  return (
<>
  {getState.length === 0 ?
    (
                <div className='v'>
                 <h1>Your basket is empty</h1>
                </div>

    ) : ( //if else 
    <>

        <h1> Your basket Is Here </h1>
          <div className="v1">

      <table>
      <thead>
    <th>Product Image</th>
    <th> Product title</th> 
    <th> Product Price</th>
        <th>Remove</th>
        <th>Quantity</th>
        </thead>
        <tbody>
  <br/>
  <br/>
      {getState.map((item,id) => {
      {total+=+item.price*item.quantity};

        return (
          <tr key={id}>
              <td><img src={item.image} alt="cart" width="180" height="180"/></td>
                <td> {item.title}</td>           
                <td> {item.price}</td>
  <td >< button onClick={() => remove(item)}> Remove </button></td>
  <br/>
  <span style={{fontSize:22}}>  Quantity: {item.quantity}</span>
  <td> <button style={{fontSize:24}} onClick={item.quantity > 1 ? ()=>dec(item) : ()=>remove(item)}>-  </button></td>             
  <td> <button style={{fontSize:24}}  onClick={() => inc(item)}> + </button></td>
  </tr>
      );
     })}
    </tbody>
 </table>
      
<h3>Cart Total:<span>{total}</span></h3>
        </div>
      </>)
      }
  </>);
};
export default Cart;
