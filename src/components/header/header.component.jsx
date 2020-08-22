  
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
      <div className="option">
          <h2>
         <i class="far fa-bell"></i>
         </h2>
          </div>
       <div className="profile-cover">
        <img src="/assets/images/javascript.jpg" alt='item'/>
        <div className='profile-details'>
          <span className='name'>Hello</span>
           <span className='price'>
               Stanley
               </span>
       </div>
   </div>
      
    </div>
  </div>
  )
    }
};

export default Header;