import Contact from "./components/contact/Contact";
import Extension from "./components/extension/Extension";
import FAQ from "./components/faq/FAQ";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Features />
			<Extension />
			<FAQ />
			<Contact />
		</div>
	);
}

export default App;
