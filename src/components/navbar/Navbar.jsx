import LOGO from "../../images/logo-bookmark.svg";
import "./styles.css";

const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar">
				<div className="navbar-brand">
					<a href="/">
						<img src={LOGO} alt="bookmark-logo" />
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
				<button className="btn login">LOGIN</button>
			</nav>
		</div>
	);
};

export default Navbar;
