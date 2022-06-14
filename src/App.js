import Extension from "./components/extension/Extension";
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
		</div>
	);
}

export default App;
