import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import PaymentData from '../payment/paymentdata/paymentdata.component';
import {fetchData} from '../../redux/actions/index';
import ChartContainer from '../chart-container/chart-container.component';



const Main =({details, fetchData})=>{
      useEffect(()=>{
    fetchData();

     },[fetchData]);
    return(
     <div>
         <ChartContainer details={details}/>
         <PaymentData details={details}/>
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