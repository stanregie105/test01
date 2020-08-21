import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


export default({detail}) =>{
    const {id,data, color,month} = detail;
    return(
        
        
      <div>
          {month}
          <div>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        </div>
        
      </div>
      
      
      
      
    );
}