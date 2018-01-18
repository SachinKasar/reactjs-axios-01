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
        this.handleGetClick = this.handleGetClick.bind(this);
        this.handlePostClick = this.handlePostClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handlePutClick = this.handlePutClick.bind(this);
        
        
        
        
    }

  handleGetClick () {
    axios.get('http://localhost:3000/twowheels' )
      .then(response => this.setState(
        {
             name: response.data[response.data.length-1].name,
             totalCount:response.data.length, 
             manufacturer:response.data[0].manufacturer
        }
    )) 
  }

  handlePostClick () {
        axios.post('http://localhost:3000/twowheels', {
        name: 'Splendor',
        manufacturer: 'Hero'
      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

    handlePutClick () {
        axios.put('http://localhost:3000/twowheels/1', {
        name: 'Updated Name',
        manufacturer: 'Updated Manugacturer'
      } )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
    
    handleDeleteClick () {
        let id =  Number(this.state.totalCount-1);
        axios.delete('http://localhost:3000/twowheels/'+id)
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
								<b>By :</b> {this.state.manufacturer}
							</li>
                            <li> Total Count : {this.state.totalCount}  </li>
						</ul>
                        
                         <br/>
                        <div className="btn-group btn-group-sm">
                             <button className='btn btn-primary' style={{margin:'5px'}} onClick={this.handleGetClick}>Get</button>
                             <button className='btn btn-primary' style={{margin:'5px'}} onClick={this.handlePostClick}>Post</button>
                             <button className='btn btn-primary' style={{margin:'5px'}}  onClick={this.handlePutClick}>Put</button> 
                             <button className='btn btn-primary' style={{margin:'5px'}}  onClick={this.handleDeleteClick}>Delete</button>
                        </div>             
     
					</div>
				 
      
        );
    } 
}

 
