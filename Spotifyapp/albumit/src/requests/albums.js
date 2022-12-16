import axios from "axios"
const id = '4SZko61aMnmgvNhfhgTuD3'

const getAlbum = async () => {
    await axios.get(`https://api.spotify.com/v1/albums/${id}`)
}

export default getAlbum