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
