import React from 'react';
import Chart from '../charts/chart.component';


const ChartContainer=({details})=>{
   const {id} =details;
    return(
  <div className="row row-content">
      <div className="col-12 col-sm-3">
          </div>
      <div className="col-12 col-sm-9">
          <div>
     <h4> Today:5,August 2018</h4>
     </div>
      
        <table className="table table-hover">
        <tbody>{
          details.filter((detail, idx)=>idx<3).map(detail=>
             <tr key={id}><td><Chart detail={detail}/></td></tr>
          )
      } </tbody></table>
       
     </div>
     </div>
);
}


export default ChartContainer;