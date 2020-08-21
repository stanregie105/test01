import React from 'react';

const PaymentItem =({detail})=>{
    const {id,itemType,price,Transaction_no,Time,status}= detail;
         return(
              <tr key={id}>
                  <td>{itemType}</td>
                  <td>{price}</td>
                  <td>{Transaction_no}</td>
                  <td>{Time}</td>
                  <td>{status}</td>
            </tr>
         );
}

export default PaymentItem;