import React, { Component } from 'react';
import './bin.css';
import Shelfielogo from '../Images/shelfielogo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'



class Bin extends Component {

    constructor(props) {
        super(props)
            this.state = {
            pname: "",
            pprice: "",
            product_image: "",
            disabled: true,
            showEdit: "show",
            showSave: "hide"
        }

        this.handleChangeEdit = this.handleChangeEdit.bind(this)

        this.binid = this.props.match.params.binid
        this.shelfid = this.props.match.params.shelfId


        this.handleDelete=this.handleDelete.bind(this)
        this.handleSave=this.handleSave.bind(this)
        this.handlePrice=this.handlePrice.bind(this)
        this.handleName=this.handleName.bind(this)
    }
    componentDidMount() {
        axios.get(`/api/shelf/${this.shelfid}/bin/${this.binid}`).then(res => this.setState({pname: res.data[0].product, pprice: res.data[0].price, product_image: res.data[0].product_image}))
    }

    handlePrice(e){
        console.log(this.state.pprice)
        this.setState({
            pprice: e.target.value
        })
    }
    handleName(e){
        console.log(this.state.pname)
        this.setState({
            pname: e.target.value
        })
    }

    handleChangeEdit() {
        this.setState({
            disabled: !this.state.disabled,
            showEdit: "hide",
            showSave: "show"
        })

    }
    handleSave(){
        axios.put(`/api/shelf/${this.shelfid}/bin/${this.binid}`, this.state)
        .then(() => {this.setState({
                    disabled: true,
                    showEdit: 'show',
                    showSave: 'hide'
        })}
            // this.props.history.push(`/shelf/${this.shelfid}/bin/${this.binid}`)
        )
    }
    handleDelete(){
        axios.put(`/api/shelf/${this.shelfid}/bin/${this.binid}`)
        .then(() => {
            this.props.history.push(`/shelf/${this.shelfid}`)
        })
    }

    render() {
        const { } = this.state
        return (
            <div className="App1">

                <header className="appheader2">

                    <div className="logo2">
                        <Link to='/'><h3><img src={Shelfielogo} width="50" height="50" /></h3></Link>
                    </div>


                    <div className="headershelfie2">
                        <Link to={`/shelf/${this.shelfid}`}>
                            <button className="hs2"><h1>Shelf {this.shelfid}</h1></button>
                        </Link>
                    </div>

                    <div className="innerpart"><h1>Bin {this.binid}</h1></div>

                </header>
                <div className="mainbox2">

                    <div className="picholderbox">
                        <div className="pic">
                            {<img src={this.state.product_image} width="250" height="230"/>}
                        </div>
                    </div>
                    <div className="inputarea">
                        <p><h1>Name</h1></p>
                        <input disabled={this.state.disabled} className="inputbox" type="text" onChange={this.handleName} value={this.state.pname}></input>
                        <p><h1>Price</h1></p>
                        <input disabled={this.state.disabled} className="inputbox" type="text" onChange={this.handlePrice} value={this.state.pprice} />
                        <br />
                        <div className="editdeletecontainer">

                            <button className={`editdeletebutton ${this.state.showEdit}`} onClick={this.handleChangeEdit}>EDIT</button>

                            <button className={`editdeletebutton1 ${this.state.showSave}`} onClick={this.handleSave}>Save</button>

                            <button className="editdeletebutton" onClick={this.handleDelete}>DELETE</button>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default withRouter(Bin)

//{this.shelfid.toUpperCase()}