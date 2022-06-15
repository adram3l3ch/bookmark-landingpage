import HERO from "../../images/illustration-hero.svg";
import "./styles.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="round-bg" />
				<div className="hero__content">
					<h1 className="hero__title">A Simple Bookmark Manager</h1>
					<p className="hero__desc">
						A clean and simple interface to organize your favourite websites.
						Open a new browser tab and see your sites load instantly. Try it for
						free.
					</p>
					<div className="hero__btns">
						<button className="btn primary">Get it on Chrome</button>
						<button className="btn secondary">Get it on Firefox</button>
					</div>
				</div>
				<div className="hero__image">
					<img src={HERO} alt="hero-image" aria-hidden />
				</div>
			</div>
		</section>
	);
};

export default Hero;
