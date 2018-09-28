import React, { Component } from 'react';
import './addtobin.css';
import Shelfielogo from '../Images/shelfielogo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {withRouter} from 'react-router'


class Addtobin extends Component {

    constructor(props){
        super(props)
        this.state={
            newName:"",
            newPrice:"",
            newPic:""

        }
        
        this.handlePrice=this.handlePrice.bind(this)
        this.handleName=this.handleName.bind(this)
        this.handleAddInventory=this.handleAddInventory.bind(this)
        this.handlePicture=this.handlePicture.bind(this)
        
        this.shelfid=this.props.match.params.shelfid 
        this.binid = this.props.match.params.binid

    }
    
    handlePrice(e){
        console.log(this.state.newPrice)
        this.setState({
            newPrice: e.target.value
        })
    }
    handleName(e){
        console.log(this.state.newName)
        this.setState({
            newName: e.target.value
        })
    }
    handlePicture(e){
        console.log(this.state.newPic)
        this.setState({
            newPic: e.target.value
        })
    }
    
    handleAddInventory(){
        axios.post(`/api/shelf/${this.shelfid}/bin/${this.binid}`, this.state)
        .then(() => {
            this.props.history.push(`/shelf/${this.shelfid}/bin/${this.binid}`)
        }) 
    }
    
    render() {
        console.log(this.props)
        console.log(this.binid)
        return (
        <div className="App3">
      
        <header className="appheader3">

          <div className="logo3">
            <Link to='/'><h3><img src={Shelfielogo} width="50" height="50"/></h3></Link>
          </div>
          
          
          <div className="headershelfie3">
          <Link to={`/shelf/${this.shelfid}`}>
          <button className="shelfbutton"><h1>Shelf {this.shelfid}</h1></button>
          </Link>
          </div>
          
          <div className="innerpart3"><h1>Add to Bin {this.binid}</h1></div>
          
        </header>
        <div className="mainbox3">
        
            <div className="inputarea3">

                <p><h1>Name</h1></p>

                <input className="inputbox3" type="value" placeholder="name of product" onChange={this.handleName}/>

                <p><h1>Price</h1></p>

                <input className="inputbox3" type="value" placeholder="0.00" onChange={this.handlePrice}/>
                
                
                <p><h1>Picture</h1></p>

                <input className="inputbox3" type="value" placeholder='Picture URL' onChange={this.handlePicture}/>
                <br/>

                <div className="editdeletecontainer3">
                <button className="addinventorybut" onClick={this.handleAddInventory}>+ Add Inventory</button>

                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Addtobin)