import './App.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Recommendations from './components/Recommendations'
import Login from './components/Login'
import { getAll, postAlbum } from './services/albumService'
import { Navbar, NavItem } from './components/Navbar'
import Albums from './components/Albums'
import Filterbar from './components/Filterbar'

const spotify = {
  ClientId: 'ID_HERE',
  ClientSecret: 'CODE_HERE'
}

const App = () => {
  
  const [token, setToken] = useState('')
  const [albums, setAlbum] = useState([])
  const [filter, setFilter] = useState('')
  
  const filteredAlbums = albums.filter( album => album.name.toLowerCase().includes(filter.toLowerCase()) 
                                              || album.artist.toLowerCase().includes(filter.toLocaleLowerCase()) )
  
  
  useEffect( () => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token)
    })

    getAll()
      .then( (albumsInDb) => {
        console.log('response', albumsInDb)
        setAlbum(albumsInDb)
      })
  }, [])
  
  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const createAlbum = async (albumId, date, rating) => {
    const albumToAdd = await postAlbum(albumId, token, date, rating)
    console.log('album to add', albumToAdd)
      setAlbum([albumToAdd].concat(albums))
  }

  return (
    <div className="App" >
      <Navbar>
        <NavItem text="Recommend">
          <Recommendations />
        </NavItem>
        <NavItem text="Login">
          <Login createPost={createAlbum}>
          </Login>
        </NavItem>
      </Navbar>
      <h1>Niklas has listened to these albums:</h1>
      <Filterbar handleChange={handleFilterChange}></Filterbar>
      <Albums albums={filteredAlbums} />
      
    </div>
  );
}

export default App;
