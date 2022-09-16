// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const styledText = {
	fontSize: '20px',
	textAlign: 'center',
	color: 'blue'
}

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
