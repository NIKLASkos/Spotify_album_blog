import axios from "axios"
const baseUrl = 'http://localhost:3003/recommendations/'

  const postRecommendation = async (text) => {
    console.log('textu', text)
    const response = await axios.post(baseUrl, text)
    console.log('res', response)
    console.log(response.data)
    return response.data
  }

  export { postRecommendation }