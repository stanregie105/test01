  
import React,{Component} from 'react';
import SearchBox from '../search/search.component';


 
import './header.styles.scss';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      searchField: ''
    }
    this.handleChange=this.handleChange.bind(this);
  }
  
   handleChange=(e)=>{
           e.preventDefault();
     this.setState({ searchField:e.target.value});
    }

    render(){
  return(
  <div className='header'>
    <div className='logo-container'>
      <h2>TransMonitor</h2>
    </div>
     <SearchBox
      
        placeholder="search-items"
        handleChange={this.handleChange}
       />
    <div className='options'>
      <div className='option'>
        Support
      </div>
      <div className='option'>
        FAQ
      </div>
       <h1>
        <div>
          <i className="fas fa-code"></i>
        </div>
      </h1>
       <div className="profile-cover">
        <div className='profile-details'>
          <span className='name'>Hello</span>
           <span className='price'>
               Stanley
               </span>
       </div>
               <img src="/assets/images/javascript.jpg" alt='item'/>

   </div>
      
    </div>
  </div>
  )
    }
};

export default Header;