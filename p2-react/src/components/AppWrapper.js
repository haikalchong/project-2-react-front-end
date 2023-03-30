import React from "react";
import Dashboard from "./dashboard";
import {
    BrowserRouter, Router,
    Routes,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    Navigate
  } from "react-router-dom";

export class AppWrapper extends React.Component{

state={
    status:false
}
render(){
    if(this.state.status===false){
        return  <Navigate to ="/login"/> 
    }
    
    return(
        <div>
            Hi
            <Route path="/" component={<Dashboard/>}/>
        </div>
    )
}

}