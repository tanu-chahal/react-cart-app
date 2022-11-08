import React from 'react'

export default function Footer(props){
    return(
        <div className="row fixed-bottom mb-2">
            <button className="btn btn-danger col-2 p-2" onClick={() => {props.resetCart()} }>Clear Cart</button>
            <div className='col-8 bg-dark text-white text-center'>₹{props.totalAmount}</div>
            <button className="btn btn-primary col-2 p-2">Pay Now</button>
            
        </div>
    );
}