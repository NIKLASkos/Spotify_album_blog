import { useState } from "react"

const AddAlbumForm = (props) => {
    const [newAlbum, setAlbum] = useState('')
    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')

    const handleAlbumChange = (event) => {
        setAlbum(event.target.value)
    }

    const handleDateChange = (event) => {
      setDate(event.target.value)
    }

    const handleRatingChange = (event) => {
      setRating(event.target.value)
    }
    
    const addAlbum = (event) => {
        event.preventDefault()
        //spotify album ID is the last 22 characters of album link
        const id = newAlbum.slice(-22)
        console.log('id', id)
        props.createPost(id, date, rating)
        setAlbum('')
        setDate('')
        setRating('')
    }

    return (
        <div className="dropdown">
          <h2>Add a new album</h2>
          <form onSubmit={addAlbum}>
            <div>
              <div>
                        Spotify link:
              <input
                id='title'
                value={newAlbum}
                onChange={handleAlbumChange}
                placeholder='Link to album'>
              </input>
              </div>
              <div>
                        Date of listen:
              <input
                id='listened'
                value={date}
                type="date"
                onChange={handleDateChange}
                placeholder='dd/mm/yyyy'>                  
              </input>
              </div>
              <div>
                          Rating out of 10:
              <input
                id='rating'
                value={rating}
                onChange={handleRatingChange}
                placeholder='Rating'>                  
              </input>
              </div>
            </div>
            <button id='blogsubmit' type="subit" >Add album</button>
          </form>
        </div>
    )
}

export default AddAlbumForm