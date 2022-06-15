import Contact from "./components/contact/Contact";
import Extension from "./components/extension/Extension";
import FAQ from "./components/faq/FAQ";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Features />
				<Extension />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
