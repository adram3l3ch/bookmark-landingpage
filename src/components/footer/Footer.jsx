import { ReactComponent as LOGO } from "../../images/logo-bookmark.svg";
import { ReactComponent as Fb } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import "./styles.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<nav className="navbar">
					<div className="navbar-brand">
						<a href="/">
							<LOGO />
						</a>
					</div>
					<ul className="navlinks">
						<li className="navlink">
							<a href="#">FEATURES</a>
						</li>
						<li className="navlink">
							<a href="#">PRICING</a>
						</li>
						<li className="navlink">
							<a href="#">CONTACT</a>
						</li>
					</ul>
					<div className="sociallinks">
						<Fb />
						<Twitter />
					</div>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
