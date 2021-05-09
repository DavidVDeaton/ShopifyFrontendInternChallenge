import Button from './Button';

const DisplayMovie = ( {onClick, src, alt, value} ) => {


    return (
        <div className = "container">        
            <img onClick={onClick} src={src} alt={alt}/>
            <h2>{alt}</h2>
            <h3>({value})</h3>
      </div>
    )
}

export default DisplayMovie;