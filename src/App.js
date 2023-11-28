import "./App.css";
import Main from "./Components/Main";
import myData from "./Data/myData"

function App() {
  return (
    <>
    <div>
    Sampath Chathuranga
    </div>
    {myData?.map(({name,city,job},index) => {
    return <Main key={index} name={name} city={city} job={job} />
    })}
    </>
  );
}

export default App;
