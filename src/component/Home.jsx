import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './home.css';
import Button from '@material-ui/core/Button';
import SignUpForm from './SignUpForm';
import DashBoard from './DashBoard';


class Home extends Component{
    signUp(){
        return(<DashBoard/>);        
    }
    render(){
        return(
            <div className="container">
                <h1 className="h1cover">Fertilizer Perdication System</h1><h6>V1.0</h6>
                <div className="cover">
                    <p className="text-info">Sign In to your account</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="material-icons">perm_identity</i>
                            </span>
                        </div>
                        <input value={this.state.email} onChange={this.handleChange} type="email"  id="exampleInputEmail1" name="email" className="form-control" placeholder="Enter email" aria-label="Email" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="material-icons">lock</i>
                            </span>
                        </div>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                    <button type="button" className="btn btn-warning">Sign In</button> <br/><hr/>
                    <button type="button" className="btn btn-danger" onClick={this.signUp()}>
                        Sign up
                    </button>
                </div>
                <Button variant="contained" color="primary"  >
                    Weather Perdication
                </Button>_
                <Button variant="contained" color="secondary"  >
                    Crop Prediction
                </Button>_
                <Button variant="contained" color="primary" >
                    Fertilizer Prediction
                </Button>_
            </div>
        );
    }
}
export default Home;
