import { useEffect, useRef, useState } from "react";
import Feature from "./Feature";
import "./styles.css";
import tab1 from "../../images/illustration-features-tab-1.svg";
import tab2 from "../../images/illustration-features-tab-2.svg";
import tab3 from "../../images/illustration-features-tab-3.svg";

const features = [
	{
		img: tab1,
		title: "Bookmark in one click",
		desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
	},
	{
		img: tab2,
		title: "Intelligent search",
		desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
	},
	{
		img: tab3,
		title: "Share your bookmarks",
		desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
	},
];

const Features = () => {
	const [activeFeature, setActiveFeature] = useState(0);
	const [inset, setInset] = useState({});
	const listRef = useRef();

	useEffect(() => {
		const item = listRef.current.childNodes[activeFeature];
		const left = item.offsetLeft;
		const width = item.offsetWidth;
		const top = item.offsetTop + item.getBoundingClientRect().height;
		setInset({ left, width, top });
	}, [activeFeature]);

	const style = {
		"--left": `${inset.left}px`,
		"--width": `${inset.width}px`,
		"--top": `${inset.top}px`,
	};

	return (
		<section className="features">
			<div className="container">
				<div className="round-bg" />
				<h2 className="features__title">Features</h2>
				<p className="features__desc">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
				<div className="features__selector" style={style}>
					<ul className="features__list" ref={listRef}>
						{["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map(
							(feature, index) => (
								<li
									className="features__item"
									onClick={() => setActiveFeature(index)}
									key={index}
								>
									{feature}
								</li>
							)
						)}
					</ul>
					<Feature {...features[activeFeature]} />
				</div>
			</div>
		</section>
	);
};

export default Features;
