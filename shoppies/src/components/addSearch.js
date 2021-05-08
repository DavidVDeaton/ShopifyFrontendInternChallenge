import { useState } from 'react'

const Search = ({onAdd}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Search Movie')
            return
        }

        onAdd({text})

        setText('')
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
        </div>
        <input type='submit' value='Search Movie' className='btn btn-block'></input>
      </form>
    )
}

export default Search;