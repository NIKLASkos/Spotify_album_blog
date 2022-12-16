import { useState } from "react"
import { postRecommendation } from "../services/recommendationService"

const Recommendations = (props) => {

    const [notification, setNotification] = useState('')
    const [recommendation, setRecommendation] = useState('')

    const handleRecommendationChange = (event) => {
        setRecommendation(event.target.value)
    }

    const submitRecommendation = async (event) => {
        event.preventDefault()
        console.log('recommendatio', recommendation)
        if (recommendation.length > 0) {
        try {
            await postRecommendation({
                text: recommendation
            })
            setNotification('Recommendation successfully saved. Thanks!')
            setTimeout(() => {
                setNotification('')
            }, 3000);
            setRecommendation('')
        } catch (error) {
            setNotification('There was an error. Please try again.')
            setTimeout(() => {
                setNotification('')
            }, 3000);
        }
    }   
    }

    return (
        <div className="dropdown">
        <form onSubmit={submitRecommendation}>
          <div>
                    Recommendation (artist or album):
            <input
              id='title'
              type='text'
              value={recommendation}
              onChange={handleRecommendationChange}>
            </input>
          </div>
          <button id='recommend' type="submit" >Add recommendation</button>
        </form>
        <div>
            {notification}
        </div>
      </div>
    )
}

export default Recommendations