import React, { Component } from 'react';
import fire from './Config/Fire';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
        <div className="container">
            <h1 className="h1cover">Fertilizer Prediction System</h1><h6>V1.0</h6>
            <div className="cover">            
                <p className="text-info">Sign In to your account</p>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                        <i className="material-icons">perm_identity</i>
                        </span>
                    </div>
                    <input value={this.state.email} onChange={this.handleChange} type="email"  id="exampleInputEmail1" name="email" className="form-control" placeholder="Enter email" aria-label="Email" aria-describedby="emailHelp"/>
                </div>  
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="material-icons">lock</i>
                        </span>
                    </div>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  aria-label="Password" aria-describedby="basic-addon1" />
                </div> 
                <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
            </div>
        </div>
    );
  }
}
export default Login;