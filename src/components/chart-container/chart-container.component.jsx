import React from 'react';
import Chart from '../charts/chart.component';


const ChartContainer=({details})=>{
   const {id} =details;
    return(
  <div className="row row-content">
      <div className="col-12 col-sm-3">
          </div>
      <div className="col-12 col-sm-9">
        
      <div className="col-12 col-sm-6">
          <div className="shift">
          <span>Today:5,August 2018</span>
          </div>
        <table className="table table-hover">
        <tbody>{
          details.filter((detail, id)=>id<1).map(detail=>
              <tr key={id}>
             <td><Chart key={id} detail={detail}/></td>
            <td><Chart key={id} detail={detail}/></td>
             <td><Chart key={id} detail={detail}/></td>
             <td><Chart key={id} detail={detail}/></td>
             <td><Chart key={id} detail={detail}/></td>

             </tr>
          )
      } </tbody></table>
       </div>
       
     </div>
     </div>
);
}


export default ChartContainer;