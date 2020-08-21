import React from 'react';
import PaymentItem from '../payment-item/payment-item.component';


const PaymentData=({details})=>{

    return(
  <div className="row row-content">
      <div className="col-12 col-sm-3">
          </div>
      <div className="col-12 col-sm-9">
     <h4> Payments</h4>
  <table className="table table-hover">
               <thead >
                   <tr>
                     <th>itemType</th>
                     <th>Price</th>
                     <th>Transaction_no</th>
                     <th>Time</th>
                     <th>status</th>
                    </tr>
                </thead>
    <tbody>{
          details.map(detail=>
             <PaymentItem key={detail.id} detail={detail}/>
          )
      }</tbody>
     </table>
     </div>
     </div>
);
}


export default PaymentData;