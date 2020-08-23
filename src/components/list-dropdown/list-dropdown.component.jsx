import React from 'react';


import './list-dropdown.styles.scss';

const ListDropdown =()=>(
   <div className='list-dropdown'>
       <div className='list-items'>
            <ul className="list-unstyled">
                       <li>All<span className="drop">&#8744;</span></li>
                       <li>All</li>
                       <li>Reconciled</li>
                       <li>Un-Reconciled</li>
                       <li>Settled</li>
                       <li>Un-Settled</li> 
             </ul>
           </div>
        
   </div>
);

export default ListDropdown;