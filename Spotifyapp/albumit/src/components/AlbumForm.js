import { useState } from 'react'

const AlbumForm = ( props ) => {
  //this is my first project, making the password secure is not relevant here :).
  const password = 'testi'
  const [newAlbum, setAlbum] = useState('')
  const [newPassword, setPassword] = useState('')
  const [loggedIn, setLogin] = useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  
  const handleLogin = (event) => {
    event.preventDefault()
    if (newPassword === password) {
      setLogin(true)
      setPassword('')
    }
    else {
      setPassword('')
      window.alert('Wrong password')
    }
  }

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value)
  }

  const addAlbum = (event) => {
    event.preventDefault()
    //spotify album ID is the last 22 characters of album link
    const id = newAlbum.slice(-22)
    console.log('id', id)
    props.createPost(id)
  } 

  if (!loggedIn) {
    return (
      <div >
      <form onSubmit={handleLogin}>
        <div>
                    Password:
          <input
            id='title'
            type='password'
            value={newPassword}
            onChange={handlePasswordChange}>
          </input>
        </div>
        <button id='login' type="submit" >Login</button>
      </form>
    </div>
    )
  }

  return (
    <div >
      <h2>Add a new album</h2>
      <form onSubmit={addAlbum}>
        <div>
                    Spotify link:
          <input
            id='title'
            value={newAlbum}
            onChange={handleAlbumChange}
            placeholder='Link to album'>
          </input>
        </div>
        <button id='blogsubmit' type="subit" >Add blog</button>
      </form>
    </div>
  )
}


export default AlbumForm