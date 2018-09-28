import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import { Connect } from 'react-redux'
import './Nav.css'
import Shelfielogo from '../Images/shelfielogo.png'


class Nav extends Component {
    constructor(props){
        super(props)

        this.shelfid=this.props.match.params.shelfId
        
    }

    render() {

        let linksArray2 = ['A','B','C','D']
    let links2 = linksArray2.map(letter => {
      if (letter != null){
        //if empty then .. 

        // display +add inventory button
        // link to 
        // <Addtobin />

        // else if full then.. 
        // display bin and number
      }
     
      return (
        <React.Fragment key={letter}>
          <Link to={`/shelf/${letter}`}>
            <button className="buttons">Shelf {letter}</button>
          </Link>
          <hr/>
        </React.Fragment>
      )
    })

        return (

            <div className="App">
                <header className="appheader">
                    <div className="logo">
                        <Link to='/'><h3><img src={Shelfielogo} width="50" height="50" /></h3></Link>
                    </div>
                    <div className="headershelfie"><h1>SHELFIE</h1></div>
                </header>
                <div className="mainbox">


                    <section>
                        <div className="abcdbuttons">

                        {links2}

                        </div>

                    </section>

                </div>

            </div>
        )
    }
}

export default (Nav)