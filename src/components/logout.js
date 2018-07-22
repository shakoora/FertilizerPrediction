import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';


const logout = () => {
  return (
    <div >
                 <BrowserRouter>
                    <div>                        
                        <Switch>       
                                      
                        <Route path="/Home" component={Home} />

                        </Switch>
                        </div>
                        </BrowserRouter>
                        </div>
  );
};

export default logout;