import { dividerClasses } from "@mui/material";
import { common } from "@mui/material/colors";
import React, { Component } from "react";
class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps.number,"<== value" , this.props.number ,"<== new value")
        if( prevProps.number!= this.props.number){
            console.log("updated Couter")
        }
    }
    render() {
        return (

            <div>
                <h1>{this.props.number}</h1>
            </div>

        );
    }
}

export default Counter ;