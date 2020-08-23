import React,{Fragment} from 'react';
import PaymentItem from '../payment-item/payment-item.component';
import Search from '../../search/search.component';


const PaymentData=({details})=>{

    return(
        <Fragment>
  <div className="row row-content boom" id="rhyme">
      <div className="col-12 col-sm-3">
          </div>
      <div className="col-12 col-sm-9">
     <h4> Payments</h4>
     <p className="show">showing<span className="show-in">20 &#8744;</span>Out of 500 Payments<span><Search/></span></p>
        
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
     <div className="row boom" id="rhyme">
        <div className="movel col-sm-6 align-self-center">
            showing 1 to 50 of 500 apples
            </div>
            <div className="mover col-sm-6 align-self-center">
            <button className=" btn-full" >Previous</button>
            <button className=" btn-ghost" ><span className="bymbol"> &#10096;</span></button>
            <button className=" btn-ghost" ><span className="bymbol"> &#10095;</span></button>
           <button className=" btn-full">Next</button>
            </div>
    </div>
     </Fragment>
);
}


export default PaymentData;