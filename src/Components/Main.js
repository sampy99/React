/*const name = "Sandun Srimal";
const job = "Web Developer";

const myObj = {
name1:`${name}`,
job1:`${job}`,
city:"Galle",
}*/

function Main({name,city,job}){
//const {city} = myObj;
 return(
    <div>This is main component
    <ul>
    <li>{name}</li>
    <li>{city}</li>
    <li>{job}</li>
    <li>Angular</li>
    <li>Java</li>
    </ul>
    </div>
    );
}

export default Main;