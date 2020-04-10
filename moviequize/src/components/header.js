import React,{Component} from "react";
import '../css/style.css'


const getyear=()=>{
    const newdate=new Date();
    return newdate.getFullYear();
}

class Header extends Component {
    render(){
        return(
        <div className="top">
            <h1>Welcome to MovieQuize</h1>
            <h2>This site developed in {getyear()}</h2>
        </div>
    )
    }
}

export default Header;