import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

const Search = ({onSearch}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Search Movie')
            return
        }

        localStorage.setItem("movieSearch", text);

        onSearch();

        setText('');
    } 

    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <h6 className="submit" onClick={onSubmit}><FaSearch /></h6>
        </div>
      </form>
    )
}

export default Search;