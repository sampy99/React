import "./App.css";
import myData from "./Data/myData";
import {useState} from "react";
import Unit from "./Components/Unit"

const App = ()=>{

const [imageUrl,setImageUrl] = useState('');
const [name,setName] = useState('');
const [city,setCity] = useState('');
const [job,setJob] = useState('');

const [myData,setMyData] = useState([]);
console.log(myData);

return(
<div className="mainContainer">
<div className="mainLeft">
<input type='text' value={imageUrl} onChange={(e)=>{
e.preventDefault()
setImageUrl(e.target.value)
}} />

<input type='text' value={name} onChange={(e)=>{
e.preventDefault()
setName(e.target.value)
}}/>

<input type='text' value={city} onChange={(e)=>{
e.preventDefault()
setCity(e.target.value)
}}/>

<input type='text' value={job}
onChange={(e)=>{
e.preventDefault()
setJob(e.target.value)
}}/>

<button onClick = {()=> {setMyData(pre=>{
return[...pre,{
image: imageUrl,
name,
city,
job,
}]
});

//Long code using if
setImageUrl((pre)=>{
if(pre.length > 0){
return ''
}else{
return pre;
}
});

//using java script short code
setName((pre)=>(pre.length>0? '': pre));

setCity((pre)=>(pre.length>0? '': pre));

setJob((pre)=>(pre.length>0? '': pre));

}}> SUBMIT </button>
</div>
<div className="mainRight">
{myData?.map(({image,name,city,job},index)=><Unit
image={image}
name={name}
city={city}
job={job}
key={index}
 />)}
</div>
</div>)
}


export default App;