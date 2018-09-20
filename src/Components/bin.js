import React, { Component } from 'react';
import './bin.css';
import Shelfielogo from '../Images/shelfielogo.png'
import { Link } from 'react-router-dom'
import routes from '../routes';


class Shelf extends Component {

    constructor(props){
        super(props)
        this.state={
            pname:"",
            pprice:""

        }
    }

  render() {
    return (
      <div className="App1">
      
        <header className="appheader2">

          <div className="logo2">
            <Link to='/'><h3><img src={Shelfielogo} width="50" height="50"/></h3></Link>
          </div>
          
          <div className="headershelfie2"><h1>Shelf</h1></div>

          <div className="innerpart"><h1>Bin</h1></div>
          
        </header>
        <div className="mainbox2">
        
            <div className="picholderbox">
            <div className="pic"></div>
            </div>
            <div className="inputarea">
                <p><h1>Name</h1></p>
                <input className="inputbox" type="value" placeholder="name of product" onChange={this.handleName}/>
                <p><h1>Price</h1></p>
                <input className="inputbox" type="value" placeholder="0.00" onChange={this.handleprice}/>
                <br/>
                <div className="editdeletearea">
                <button className="editdelete">EDIT</button>
                
                <button className="editdelete">DELETE</button>
                </div>
            </div>
                        
          
        </div>
        
      </div>
    );
  }
}

export default Shelf