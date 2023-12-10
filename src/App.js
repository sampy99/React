import "./App.css";
//import myData from "./Data/myData";
import {useState} from "react";
import Unit from "./Components/Unit";
import Header from "./Components/Header";
import {Fragment,useEffect} from "react";

const App=()=>{

const [apiId,setApiId] = useState('1')
const [data,setData] = useState({})

console.log(apiId)
console.log(data)

useEffect(()=>{
console.log('useEffect running')
if(apiId.length>0 && Number(apiId)>0 && (Number(apiId)<=100)){
console.log('useEffect if condition');

const apiCall = async()=>{
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`)
const data = await res.json()

if(data){
setData(data)
   }
  }

  apiCall()
 }
},[apiId])

return (
<div>
<input
type='text'
value={apiId}
onChange={(e)=>{
e.preventDefault()

setApiId(e.target.value)

}}
placeholder='Enter your ID'/>

{data&&(<div>
<h2>{data.title}</h2>
<p>{data.body}</p>
</div>)}
</div>
)
}


export default App;