import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import PaymentData from '../payment/paymentdata/paymentdata.component';
import {fetchData} from '../../redux/actions/index';
import ChartContainer from '../chart-container/chart-container.component';
import List from '../list/list.component';



const Main =({details, fetchData})=>{
      useEffect(()=>{
    fetchData();

     },[fetchData]);
    return(
     <div className="row">
         <div className="col-sm-3">
             <List/>
             </div>
             <div className="col-sm-9">
         <ChartContainer details={details}/>
         <PaymentData details={details}/>
         </div>
    </div>
    );
}

const mapStateToProps =({details})=>({
   details,
   
});

const mapDispatchToProps= dispatch=>({
  fetchData:()=>dispatch(fetchData())
})


export default connect(mapStateToProps,mapDispatchToProps)(Main);