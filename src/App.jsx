import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Footer from "./components/Footer";

function App () 
{
	return (
		<section className="container py-5">
			<Hero />
			<Skills />
			<Projects />
			<Footer />
		</section>
	)
}

export default App;
