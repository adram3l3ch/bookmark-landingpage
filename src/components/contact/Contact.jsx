import "./styles.css";

const Contact = () => {
	return (
		<section className="contact">
			<div className="container">
				<h6 className="contact__subtitle">35,000+ ALREADY JOINED</h6>
				<h2 className="contact__title">
					Stay up-to-date with what <br /> we're doing
				</h2>
				<form className="contact__form">
					<div className="email-input">
						<input
							type="email"
							placeholder="Enter your email address"
							required
						/>
						<div className="error">Whoops, make sure it's an email</div>
					</div>
					<button className="btn login">Contact Us</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
