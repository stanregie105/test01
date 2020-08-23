import React,{Fragment} from 'react';
import './list.styles.scss';

const List =()=>{
    return(
        <Fragment>
            <div>
                <button className=" btn-fulll" >Generate Hedge</button>
            </div>
       <div className="main-top">
           <p>Main</p>
       </div>
       <div className="main">
           <i class="fas fa-burn"></i><span className="overview">Overview</span>
       </div>
       <div className="payment">
           <p>Payments</p>
           <div className="payment-list">

            <ul className="list-unstyled">
                       <li><span></span>All Payments</li>
                        <li><span><i class="far fa-calendar-plus"></i></span>Reconciled Payments</li>
                        <li><span><i class="far fa-calendar-times"></i></span>Un Reconciled Payments</li>
                        <li><span><i class="fab fa-centercode"></i></span>Manual Settlement</li>
             </ul>
            </div>
        </div>
          <div className="orders">
           <p>Orders</p>
           <div className="order-list">
            <ul className="list-unstyled">
                       <li><span><i class="fas fa-calendar-alt"></i></span>All orders</li>
                        <li><span><i class="far fa-calendar-alt"></i></span>Pending orders</li>
                        <li><span><i class="far fa-calendar"></i></span>Reconciled Orders</li>
                        <li><span><i class="far fa-user"></i></span>Merchant Profile</li>
             </ul>
            </div>
        </div>
       </Fragment>
    );
}
export default List;