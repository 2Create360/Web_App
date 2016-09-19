import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Header from '../components/header'

class Option extends React.Component{
    render(){
        return(
            <option>{this.props.each}</option>
        )
    }
}

class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            months:[1,2,3,4,5,6,7,8,9,10,11,12],
            years:[2016,2017,2018,2019]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="content height100vh">
                    <div className="background">
                        <div className="col-md-4 col-md-offset-4 mainContent padding-top-20">
                            <div className="row text-center">
                                <img src="/img/master_card.png"/>
                            </div>
                            <div className="row form-group">
                                <label className="control-label text-white">Name on Card</label>
                                <input type="text" className="form-control form-control-solid placeholder-no-fix" placeholder="Name on Card"/>
                            </div>
                            <div className="row form-group margin-top-10">
                                <label className="control-label text-white">Card Number(no spaces):</label>
                                <input type="text" className="form-control form-control-solid placeholder-no-fix" placeholder="Card Number(no spaces)" />
                            </div>
                            <div className="row form-group margin-top-10">
                                <label className="control-label text-white">Expiry Date</label>
                                <div>
                                    <select name="expMonth">
                                        {this.state.months.map((result)=>{
                                            return(<Option each={result} key={result} />);
                                        })}
                                    </select>
                                    &nbsp;&nbsp;
                                    <select name="expMonth">
                                        {this.state.years.map((result)=>{
                                            return(<Option each={result} key={result} />);
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group margin-top-10">
                                <label className="control-label  text-white">POSTAL CODE</label>
                                <input type="text" className="form-control form-control-solid placeholder-no-fix" placeholder="XXX" />
                            </div>
                            <div className="row padding33">
                                <div className="checkbox">
                                    <label className="text-white">
                                        <input type="checkbox" /> ACCEPT TERMS & CONDITIONS
                                    </label>
                                </div>
                            </div>
                            <div className="row text-center">
                                <Link type="button" to="/paymentconfirm" className="btn whiteBackground " id="continue">Continue
                                    <span className="btn-primary"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(null, mapDispatchToProps)(Payment);