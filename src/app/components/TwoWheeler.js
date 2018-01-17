import React from "react";
import {render} from "react-dom";

import axios from 'axios';

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
    
    constructor () {
        super()
        this.state = {
            name: '',
            totalCount:0,
            manufacturer:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePostClick = this.handlePostClick.bind(this);
    }

  handleClick () {
    axios.get('http://localhost:3000/twowheels')
      .then(response => this.setState(
        {
             name: response.data[0].name,
             totalCount:response.data.length, 
             manufacturer:response.data[0].manufacturer
        }
    ))
  }

    handleClick () {
    axios.get('http://localhost:3000/twowheels')
      .then(response => this.setState(
        {
             name: response.data[0].name,
             totalCount:response.data.length, 
             manufacturer:response.data[0].manufacturer
        }
    ))
  }
    
    handlePostClick () {
    axios.post('http://localhost:3000/twowheels', {
    name: 'Fred',
    manufacturer: 'ssss'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
    }

    render() {
        return ( 
             
				    <div  className="alert alert-warning" style={{border: '1px solid grey'}}>
						<h1 style={{color:'blue', margin:'5px 5px 5px 5px'}}> Two Wheeler </h1>
						<ul>
							<li>
								<b>Name :</b> {this.state.name}
							</li>
							<li>
								<b>By :</b> Royal Enfield
							</li>
            {this.state.totalCount} <br/>
            {this.state.manufacturer}
						</ul>
            
             <button className='btn btn-primary' onClick={this.handleClick}>Get</button>
             <button className='btn btn-primary' onClick={this.handlePostClick}>Post</button>
                                     
     
					</div>
				 
      
        );
    } 
}

 
