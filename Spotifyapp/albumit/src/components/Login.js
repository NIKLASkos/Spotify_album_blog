import { useState } from "react"
import AddAlbumForm from "./AddAlbum"

const Login = (props) => {
    const password = 'testi'
    
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
  
    if (!loggedIn) {
      return (
        <div className="dropdown">
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
        <AddAlbumForm createPost={props.createPost}></AddAlbumForm>
    )
        
  }

  export default Login