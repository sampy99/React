
import {Fragment} from "react";


function Main({name,city,job}){
//const {city} = myObj;
 return(
    <div>
    <img src="https://th.bing.com/th/id/OIP.ImSFQ72Mq4JWhG_27vVChQHaEo?rs=1&pid=ImgDetMain" alt="teddyimage"/>
    <div>
    <h1>{name}</h1>
    <p><span>{city}</span></p>
    <p><span>{job}</span></p>
    </div>
    </div>
    );
}

export default Main;