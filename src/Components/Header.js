import closeMenu from "../Image/close1.svg";
import {useState} from 'react';
import hMenu from "../Image/menu.svg";


const Header = ()=>{

  const [menuClick,setMenuClick] = useState(false)

  return (
         <header className = "headerContainer">
         <h1>My <span>Header</span></h1>
         <nav>

         <ol>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
         <li>Project</li>
         </ol>

         <img className="hMenu" src = {hMenu} alt=" menu" style={{
         width:'30px',
         cursor:'pointer',
         }}

         onClick={()=>{
                  setMenuClick((pre)=>(!pre ? true:pre));
                  }}
         />


         <ul style ={{
           right:`${menuClick?'-20px':'-250px'}`,
         }}>
         <div className="headerMenuClose">
         <img src = {closeMenu} alt="close menu" style={{width:'40px' }}

         onClick={()=>{
                           setMenuClick((pre)=>(pre ? false:pre));
                           }}
         />
         </div>

         <div className="headerMenu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
         </div>
         </ul>
         </nav>
         </header>
         )
}

export default Header;