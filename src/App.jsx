import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from './components/Projects';

function App () 
{
	return (
		<section className="container py-5">
			<Hero />
			<Skills />
			<Projects />
		</section>
	)
}

export default App;
