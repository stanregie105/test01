import React,{Fragment} from 'react';
import './search.styles.scss';

const SearchBox = ({placeholder, handleChange }) =>{
    return(
        <Fragment>
       <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary"><span><i class="fa fa-search" aria-hidden="true"></i></span></button>
        </span>

     <input 
      
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
        /> 
        </Fragment>
    );
};

export default SearchBox;