import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from './components/Projects'
import Footer from "./components/Footer"
import Loader from "./utils/loader"

function App () 
{
	Loader.show()
	
	setTimeout(() => {
		Loader.hide()
	}, 2500)


	return (
		<section className="container py-5">
			<Hero />
			<Skills />
			<Projects />
			<Footer />
		</section>
	)
}

export default App
