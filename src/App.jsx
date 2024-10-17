import Hero from './components/Hero'
import Showcase from './components/Showcase'
import FooterNav from './components/FooterNav'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

function App () {

	const projects = [
		{
			name: 'OpenByte Hosting',
			description: 'A free-to-use, open-source web hosting platform powered by iFastNet infrastructure.',
			image: 'images/openbyte.jpg',
			weblink: 'https://openbytehosting.com'
		},
		{
			name: 'KxHTTP',
			description: 'A simple HTTP client for quick and easy API testing and development.',
			image: 'images/kxhttp.jpg',
			weblink: 'https://kxhttp.org/'
		},
		{
			name: 'The KANE Project',
			description: 'Our capstone project for college - a rental listings service for newcomers to Canada.',
			image: 'images/kaneproject.jpg',
			weblink: 'https://kaneproject.ca'
		}
	]

	return (
		<>
			<Hero />
			<Showcase showcaseTitle={{title: "My Projects"}} projects={projects} ></Showcase>
			<FooterNav />
		</>
	)
}

export default App
