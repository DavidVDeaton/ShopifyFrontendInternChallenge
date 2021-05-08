const DisplayMovie = ( {src, title, year} ) => {


    return (
        <div className = "spot">        
            <img className="searchIcon" src={src} alt={title} />
            <h3>{title}</h3>
            <h4>({year})</h4> 
      </div>
    )
}

export default DisplayMovie;