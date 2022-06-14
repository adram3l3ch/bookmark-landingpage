import React, { useEffect, useRef, useState } from "react";

const Feature = ({ img, title, desc }) => {
	const [mounting, setMounting] = useState(false);
	const divRef = useRef();
	useEffect(() => {
		setMounting(true);
		divRef.current.addEventListener("animationend", () => setMounting(false));

		return () =>
			divRef.current.removeEventListener("animationend", () =>
				setMounting(false)
			);
	}, [title]);
	return (
		<div className={mounting ? "feature mounting" : "feature"}>
			<div className="feature__image" ref={divRef}>
				<img src={img} alt="feature-image" aria-hidden />
			</div>
			<div className="feature__content">
				<h2 className="feature__title">{title}</h2>
				<p className="feature__desc">{desc}</p>
				<button className="btn primary">More Info</button>
			</div>
		</div>
	);
};

export default Feature;
