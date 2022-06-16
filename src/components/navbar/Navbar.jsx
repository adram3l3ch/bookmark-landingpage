import { ReactComponent as LOGO } from "../../images/logo-bookmark.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import "./styles.css";
import { useLayoutEffect, useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	useLayoutEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);
	return (
		<div className="container">
			<nav className={isOpen ? "navbar open" : "navbar"}>
				<div className="navbar-brand">
					<a href="/" aria-label="home">
						<LOGO />
					</a>
				</div>
				<ul className="navlinks">
					<li className="navlink">
						<a href="/">FEATURES</a>
					</li>
					<li className="navlink">
						<a href="/">PRICING</a>
					</li>
					<li className="navlink">
						<a href="/">CONTACT</a>
					</li>
					<li className="navlink">
						<button className="btn login">LOGIN</button>
					</li>
				</ul>
				<button className="hamburger">
					{isOpen ? (
						<Close onClick={() => setIsOpen(false)} />
					) : (
						<Hamburger onClick={() => setIsOpen(true)} />
					)}
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
