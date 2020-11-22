import React from 'react'
import { useHistory } from 'react-router-dom'

function GoBack() {
    let history = useHistory()

    return <div className='go-back' onClick={() => history.goBack()} >Go Back</div>

}

export default GoBack
