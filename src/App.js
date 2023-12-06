import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData";
//import {Fragment} from "react";

function App() {

const mainBlock = myData.map(({name, image, city, job, index}) => {
return <Main key={index} name={name} image={image} city={city} job={job} />;
});

  return (
    <div className="mainContainer">
    <div
    className="mainBlockContainer">
    {mainBlock}
    </div>
    </div>
  );
}

export default App;
