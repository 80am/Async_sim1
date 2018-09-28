import React, { Component } from 'react';
import './shelf.css';
import Shelfielogo from '../Images/shelfielogo.png'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import axios from 'axios'
// import addtobin from './addtobin'




class Shelf extends Component {
  
  constructor(props){
    super(props)

      this.state={
        binData:[]
      }
      this.shelfid=this.props.match.params.shelfId
    }
    
    componentDidMount(){
    //api call to get all the bins for this shelf
    axios.get(`/api/getbindata?shelfid=${this.shelfid}`).then(res => this.setState({binData: res.data}))
    //shove the bin data into state
  }
  
  render() {
    console.log(this.state)
    console.log(this.shelfid)
    console.log(this.props.match.params.shelfId)
    
    let links = this.state.binData.map(number => {
      if (number.product == null){

        return (
          <React.Fragment key={number.id}>
            <Link to={`/shelf/${this.shelfid}/bin/${number.bin}/addtobin`}>
              <button className="buttons2">+ Add Inventory</button>
            </Link>
            <hr/>
          </React.Fragment>
        )

 
      }else {
        return (
          <React.Fragment key={number.id}>
            <Link to={{pathname:`/shelf/${this.shelfid}/bin/${number.bin}`, bin: number }}>
              <button className="buttons1">Bin {number.bin}</button>
            </Link>
            <hr/>
          </React.Fragment>
        )
    }
    })

    return (
      <div className="App1">
      
        <header className="appheader1">

          <div className="logo1">
            <Link to='/'><h3><img src={Shelfielogo} width="50" height="50"/></h3></Link>
          </div>
          
          <div className="headershelfie1"><h1>Shelf {this.shelfid}</h1></div>
          
        </header>
        <div className="mainbox1">
          
        <section>
          <div className="abcdbuttons1">
            {links}
          </div>

        </section>
          
        </div>
        
      </div>
    );
  }
}

export default withRouter(Shelf)