import React, { useState } from 'react'
import  {Data} from "./Data";
import "./Star.css";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from '../src/redux/actions/RegisterAction';

const Products = () => { 
const [cdata] = useState(Data);

const getState = useSelector((state)=> state)
console.log(getState);
const dispatch = useDispatch();

const send = (e)=>{
  dispatch(ADD(e));
}
return (
<>

    <div className="c1>">

    {cdata.map((item,id)=>{
                  item.quantity = 1;

         return(
                  <div className="c2" key={id} >
                    <img src={item.image} className="CI" alt="cart"/>
                 <div className="cO">{item.title}
                 <br/>
                 Rating: {item.rating.rate}
                 <br/>
                  Price : ₹ {item.price}
                  </div> 

 <button type="button" className ="cB" onClick={() => send(item)}>Add to Cart</button>
      </div>                                           
                  )})}
            </div>
            </>
               );
}             
export default Products;





