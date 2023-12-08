

const Unit = ({image,name,city,job})=> {
return(
<div className = "unitContainer">
<img src={image} alt={name} />
<h3>{name}</h3>
<p><span>{city}</span></p>
<p><span>{job}</span></p>
</div>
)
}

export default Unit;