import Button from './Button';

const DisplayMovie = ( {src, title, year} ) => {


    return (
        <div className = "container">        
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <h3>({year})</h3>
            <Button />
      </div>
    )
}

export default DisplayMovie;