
//import {Fragment} from "react";


function Main({name,image,city,job}){
//const {city} = myObj;
 return(
    <div>
    <img src={image?
    `${image}`
    :`https://4.bp.blogspot.com/-rsfC6DFXa4I/UqitHvg5bqI/AAAAAAAAAOo/vFCwt1uy3j8/s1600/Sing+of+Love+Taddy+Bear.jpg`
    }
    alt="teddyimage"/>

    <div className="mainBlockDetails">
    <h3>{!name?`No Name`:`${name}`}</h3>
    <p><span>{city}</span>
 <span>{job}</span></p>
    </div>
    </div>
    );
}

export default Main;