import Hero from './components/Hero'
import Showcase from './components/Showcase'
import FooterNav from './components/FooterNav'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

function App () {

	const projects = [
		{
			name: 'OpenByte Hosting',
			description: 'A free and open-source web hosting platform for everyone.',
			image: 'images/openbyte.jpg',
			weblink: 'https://openbytehosting.com'
		},
		{
			name: 'The KANE Project',
			description: 'Our capstone project for college – a rental listings service for newcomers & immigrants.',
			image: 'images/kaneproject.jpg',
			weblink: 'https://kaneproject.ca'
		},
		{
			name: 'KxHTTP',
			description: 'A CLI-based HTTP client for quick and easy API testing. ',
			image: 'images/kxhttp.jpg',
			weblink: 'https://kxhttp.org/'
		},
		{
			name: 'Minimati',
			description: 'A simple, open-source CMS for blog posts. Built for PHP developers. ',
			image: 'images/minimati.jpg',
			weblink: 'https://github.com/kiduswb/minimati'
		}
	]

	const sites = [
		{
			name: 'Addis Capital',
			description: 'Worked as a full-stack developer and built a real estate listings website and a custom CRM.',
			image: 'images/addiscapital.jpg',
			weblink: 'https://addis.capital'
		},
		{
			name: 'Flora Agricultural Estate',
			description: 'Built a responsive website for a landscaping and agricultural services business.',
			image: 'images/floraagri.jpg',
			weblink: 'https://floraagri.com'
		},
		{
			name: 'EOTC of Brandon, MB',
			description: 'Built a responsive website for the Ethiopian Orthodox Tewahedo Church in Brandon, MB.',
			image: 'images/eotcbrandon.jpg',
			weblink: 'https://eotcbrandon.ca'
		}
	]

	return (
		<>
			<Hero />
			<Showcase showcaseTitle={{title: "My Projects"}} projects={projects} ></Showcase>
			<Showcase showcaseTitle={{title: "Commissioned Websites"}} projects={sites}></Showcase>
			<FooterNav />
		</>
	)
}

export default App
