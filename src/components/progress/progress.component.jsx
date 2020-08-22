import React,{Fragment} from 'react';

const Progress =()=>{
    return(
     <Fragment>
            <div className="order">
           <h6>Orders</h6>
               <div className="progress">
               <div className="progress-bar bg-success" style={{width:"80%"}}>
                  </div>
              <div className="progress-bar bg-warning" style={{width:"20%"}}>
               </div>
               </div>
             <div className="order-list">
               <ul className="list-unstyled">
                       <li>Pending Order:<span>20</span></li>
                        <li>Reconciled Orders:<span>80</span></li>
                        <li>Total Orders:<span>100</span></li>
             </ul>
            </div>
        </div>
            <div className="payments">
           <h6>Payments</h6>
               <div className="progress">
               <div className="progress-bar bg-success" style={{width:"80%"}}>
                  </div>
              <div className="progress-bar bg-warning" style={{width:"20%"}}>
               </div>
               </div>
             <div className="order-list">
               <ul className="list-unstyled">
                       <li>Unreconciled Payment:<span>20</span></li>
                        <li>Reconciled Payments:<span>80</span></li>
                        <li>Total Payments:<span>100</span></li>
             </ul>
            </div>
        </div>
     </Fragment>
    );
}

export default Progress;