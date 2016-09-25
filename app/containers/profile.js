import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Navbar from '../components/navbar'

class Profile extends React.Component{
    render(){
        return(
        <div className="mainBackground paymentPage">
            <Navbar/>
            <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 margin-top-70" >
                            <div className="panel panel-default credit-card-box">
                                <div className="panel-heading display-table width100">
                                    <div className="row display-tr" >
                                        <h3 className="panel-title display-td text-center" id="profileHeader">Profile</h3>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="card-container">
                                        <div className="card-wrapper"></div>
                                        <div className="form-container">
                                            <form id="profileForm">
                                                <section id="profile">
                                                    <div>
                                                        <span className="avatar">
                                                            <img src="img/avatar.jpg" alt=""/>
                                                        </span>
                                                        <h1>Jane Doe</h1>
                                                    </div>
                                                </section>
                                                <div className="cardForm-Field50">
                                                    <label>First Name</label><br/>
                                                    <input type="text" name="firstName" className="secondRow"/>
                                                </div>
                                                <div className="cardForm-Field50">
                                                    <label >Last Name</label><br/>
                                                    <input type="text" name="lastName" className="secondRow"/>
                                                </div>
                                                <label >Email Address</label>
                                                <input type="text" name="email" className="width100"/>
                                                <label>Current Password</label>
                                                <input type="text" name="name"/><br/>
                                                <label>New Password</label>
                                                <input type="text" name="name"/><br/>
                                                <label>Confirm Password</label>
                                                <input type="text" name="name"/><br/>
                                                <input type="submit" id="profileSave" value="Save" className="button CardGood"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
export default Profile;