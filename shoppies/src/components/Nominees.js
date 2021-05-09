
// import Button from './Button';

const Nominee = ( {onDoubleClick, src, title}) => {

    return (
        <div className = "nominee">        
            <img onDoubleClick={onDoubleClick} src={src} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}


export default Nominee;