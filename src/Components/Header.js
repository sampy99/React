import closeMenu from '../Image/close.svg'

const Header = ()=>(
<header className = "headerContainer">
<h1>My <span>Header</span></h1>
<nav>
<ul>
<div className="headerMenuClose">
<img src = {closeMenu} alt="close menu" />
</div>

<div className="headerMenu">
//<img src = {headerMenu} alt="header menu" />
<li>Home</li>
<li>About</li>
<li>Contact</li>
<li>Project</li>
</div>
</ul>
</nav>
</header>
)

export default Header;