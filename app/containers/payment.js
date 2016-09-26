import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import Pay from '../components/pay';
import '../styles/payment.css'

class Option extends Component{
    render(){
        return(
            <option>{this.props.each}</option>
        )
    }
}

class Payment extends Component {
    render() {
        return (
            <div className="mainBackground paymentPage">
                <Navbar/>
                <Pay/>
            </div>
        )
    }
}

export default Payment;