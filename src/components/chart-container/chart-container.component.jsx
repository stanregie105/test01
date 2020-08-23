import React,{Fragment} from 'react';
import Chart from '../charts/chart.component';
import './chart.styles.scss';
import Progress from '../progress/progress.component';


const ChartContainer=({details})=>{
   const {id} =details;
    return(
  <Fragment>
      <div className="row">
          <div className="col col-sm-3">
              </div>
          <div className="col col-sm-9">
      <div className="row">
            <div className="col-12 col-sm-3">
                
                <div className="tab-1">
                    <span>400</span>
         <table className="table table-hover">
        <tbody>{
          details.filter((detail, id)=>id<1).map(detail=>
              <tr key={id}>
             <td><Chart key={id} detail={detail}/></td>
            </tr>
          )
      } </tbody></table>
             </div>
              </div>
              <div className="col-12 col-sm-3">
                       
                       <div className="tab-1">
                           <span>400</span>
         <table className="table table-hover">
        <tbody>{
          details.filter((detail, id)=>id<1).map(detail=>
              <tr key={id}>
             <td><Chart key={id} detail={detail}/></td>
            </tr>
          )
           } </tbody></table>
             </div>
              </div>
              <div className="col-12 col-sm-3">
                       
                       <div className="tab-1">
                           <span>400</span>
         <table className="table table-hover">
        <tbody>{
          details.filter((detail, id)=>id<1).map(detail=>
              <tr key={id}>
             <td><Chart key={id} detail={detail}/></td>
            </tr>
          )
      } </tbody></table>
             </div>
              </div>
              <div className="col-12 col-sm-3">
                       <div className="tab-1">
                                <span>400</span>
         <table className="table table-hover">
             
        <tbody>{
          details.filter((detail, id)=>id<1).map(detail=>
              <tr key={id}>
             <td><Chart key={id} detail={detail}/></td>
            </tr>
          )
      } </tbody></table>
             </div>
              </div>
          </div>
          </div>
          </div>
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
             <button className=" btn-full" ><span className="bymbol"> &#10096;</span></button>
            <button className=" btn-full" ><span className="bymbol"> &#10095;</span></button>
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
    
    </Fragment>
);
}


export default ChartContainer;