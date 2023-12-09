import "./App.css";
import myData from "./Data/myData";
import {useState} from "react";
import Unit from "./Components/Unit"

const App = ()=>{

const [inputData,setInputData] = useState({
imageUrl: '',
name: '',
city: '',
job: ''
})

const [myData,setMyData] = useState([]);
console.log(myData);

return(
<div className="mainContainer">
<div className="mainLeft">

<input type='text' value={inputData.imageUrl} onChange={(e)=>{
e.preventDefault()
setInputData(pre=>({
...pre,
imageUrl:e.target.value
}))
}} />

<input type='text' value={inputData.name} onChange={(e)=>{
e.preventDefault()
setInputData(pre=>({
...pre,
name:e.target.value
}))
}}/>

<input type='text' value={inputData.city} onChange={(e)=>{
e.preventDefault()
setInputData(pre=>({
...pre,
city:e.target.value
}))
}}/>

<input type='text' value={inputData.job} onChange={(e)=>{
e.preventDefault()
setInputData(pre=>({
...pre,
job:e.target.value
}))
}}/>

<button onClick = {()=> {setMyData(pre=>{
return[...pre,{
image: inputData.imageUrl,
name: inputData.name,
city: inputData.city,
job: inputData.job,
}]
});

//Long code using if
setInputData((pre)=>{
if(pre.imageUrl.length > 0){
return {
...pre,
imageUrl:''
}
}else{
return pre;
}
});

//using java script short code
setInputData((pre)=>(pre.name.length>0? ({
...pre,
name:''
}):pre));

setInputData((pre)=>(pre.city.length>0? ({
...pre,
city:''
}): pre));

setInputData((pre)=>(pre.job.length>0? ({
...pre,
job:''
}): pre));

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