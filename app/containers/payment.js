import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Header from '../components/header'
import Pay from '../components/pay';


class Option extends React.Component{
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
                <Header/>
                <Pay/>
            </div>
        )
    }
}

export default Payment;