import React from 'react'
import { useHistory } from 'react-router-dom'

const GoBack: React.FC = () => {
    let history = useHistory()

    return <div className='go-back' onClick={() => history.goBack()} >Go Back</div>

}

export default GoBack
