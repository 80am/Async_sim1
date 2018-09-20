import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import { Connect } from 'react-redux'

import './Nav.css'
import Shelfielogo from '../Images/shelfielogo.png'


class Nav extends Component {
    render() {
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

                            <Link to={'/shelf/a'}>
                                <button className="buttons">Shelf A</button>
                            </Link>
                            <hr />
                            <Link to={'/shelf/b'}>
                                <button className="buttons">Shelf B</button>
                            </Link>
                            <hr />
                            <Link to={'/shelf/c'}>
                                <button className="buttons">Shelf C</button>
                            </Link>
                            <hr />
                            <Link to={'/shelf/d'}>
                                <button className="buttons">Shelf D</button>
                            </Link>

                        </div>

                    </section>

                </div>

            </div>
        )
    }
}

export default (Nav)