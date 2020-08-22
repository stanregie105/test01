import React from 'react';
import Chart from '../charts/chart.component';
import './chart.styles.scss';
import Progress from '../progress/progress.component';


const ChartContainer=({details})=>{
   const {id} =details;
    return(
  <div className="row row-content">
      <div className="col-12 col-sm-3">
          </div>
      <div className="col-12 col-sm-9">
        <div className="row row-content">
      <div className="col-12 col-sm-6">
        <div className="row row-content">
          <div className="col-sm-3 shift">
          <span >Today:5,August 2018</span>
          </div>
          <div className="col-sm-5 btn-mid ">
              <button type="button" class="btn btn-outline-secondary btnl"> <span className="symbol">1:30-1:40 &#10095;</span></button>
              </div>
             <div className="col-sm-2 btn-right ">
              <button type="button" class="btn btn-outline-secondary btnlr"> <span className="bymbol"> &#10096;</span></button>
              <button type="button" class="btn btn-outline-secondary btnlr"> <span className="bymbol"> &#10095;</span></button>
              </div>
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
    <div className="col-12 col-sm-6">
                 <Progress/>
             </div>
    </div>
    </div>
    
    </div>
);
}


export default ChartContainer;