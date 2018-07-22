import React, { Component } from 'react';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    singUp(){
        console.log('this.state',this.state);
        const {email,password} = this.state;
    }
    render(){
        return(
            <div className="container">
                <h1 className="h1cover">Create An Account</h1>
                <div className="cover">            
                    <p className="text-info">Sign In to your account</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="material-icons">perm_identity</i>
                            </span>
                        </div>
                        <input type="text" 
                        className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"
                        onChange={
                            event=>this.setState({email:event.target.value})
                        }
                        />
                    
                    </div>  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="material-icons">lock</i>
                            </span>
                        </div>
                        <input type="password" className="form-control"
                         placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                         onChange={
                            event=>this.setState({password:event.target.value})
                        }
                         />
                        
                    </div>  
                    <button type="button" className="btn btn-warning">Sign In</button> <br/><hr/>
                </div>
            </div> 
        );
    }
}
export default  Signup;