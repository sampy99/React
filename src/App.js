import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";
import {useState} from "react";


function App() {


const [myVar,setMyVar] = useState({name:"Sampath",city:"Galle",Job:"Designing"});

const [myDataState,setMYDataState] = useState(myData);

const clickHere=()=>{
setMyVar ({
...myVar,
name:"Chathuranga",
});

setMYDataState([...myDataState,{
name:'Ranil',
city:'Clmb',
job:'Politics',
image:"https://th.bing.com/th/id/OIP.AYGWAaheOrkinQ0jCC9MMgHaE7?w=640&h=426&rs=1&pid=ImgDetMain",
}])
console.log(myDataState);
};

const mainBlock = myDataState.map(({name, image, city, job, index}) => {
return <Main key={index} name={name} image={image} city={city} job={job} />;
});

  return (
    <div className="mainContainer">
    <div>
    <h1>{myVar.name}</h1>
    </div>
    <div
    className="mainBlockContainer">
    {mainBlock}
    <br>
    </br>
    <button style={
    {
    fontSize:'10px',
    border:'1px solid red',
    padding:'7px 12px'
    }
    }
    onClick ={clickHere}
    >
    CLICK HERE
    </button>
    </div>
    </div>
  );
}

export default App;
