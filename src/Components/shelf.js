import React, { Component } from 'react';
import './shelf.css';
// import './Nav.css'
import Shelfielogo from '../Images/shelfielogo.png'
import { Link } from 'react-router-dom'
import routes from '../routes';


class Shelf extends Component {
  render() {
    return (
      <div className="App1">
      
        <header className="appheader1">

          <div className="logo1">
            <Link to='/'><h3><img src={Shelfielogo} width="50" height="50"/></h3></Link>
          </div>
          
          <div className="headershelfie1"><h1>Shelf</h1></div>
          
        </header>
        <div className="mainbox1">
          
        <section>
                        <div className="abcdbuttons1">

                            <Link to={''}>
                                <button className="buttons1">Bin 1</button>
                            </Link>
                            <hr />
                            <Link to={''}>
                                <button className="buttons1">Bin 2</button>
                            </Link>
                            <hr />
                            <Link to={''}>
                                <button className="buttons1">Bin 3</button>
                            </Link>
                            <hr />
                            <Link to={''}>
                                <button className="buttons1">Bin 4</button>
                            </Link>
                            <hr/>
                            <Link to={''}>
                                <button className="buttons2">+ Add Inventory</button>
                            </Link>

                        </div>

                    </section>
          
        </div>
        
      </div>
    );
  }
}

export default Shelf