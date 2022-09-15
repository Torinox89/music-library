import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
  

const styledText = {
	fontSize: '20px',
	textAlign: 'center',
	color: 'blue'
}

function App(){
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
	let searchInput = useRef('')

	const API_URL = 'https://itunes.apple.com/search?term='
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		// Fetch Data
		const fetchData = async () => {
			document.title = `${term} Music`
			const response = await fetch(API_URL + term)
			const resData = await response.json()
			if (resData.results.length > 0) {
				// Set State and Context value
				return setData(resData.results)
			} else {
				return setMessage('Not Found')
			}
		}
		fetchData()
	}

	return (
		<div>
			<SearchContext.Provider value={{
				term: searchInput,
				handleSearch: handleSearch
			}}>
				<div style={styledText}>
				<SearchBar />
				</div>
			</SearchContext.Provider>
			<div style={styledText}>
			  {message}
			</div>
			<DataContext.Provider value={data}>
				<Gallery />
			</DataContext.Provider>
		</div>
  	);
}

export default App;

