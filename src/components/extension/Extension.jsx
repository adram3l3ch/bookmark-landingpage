import ExtensionCard from "./ExtensionCard";
import "./styles.css";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

const extensions = [
	{
		title: "Add to Chrome",
		image: chrome,
		version: "Minimum version 62",
	},
	{
		title: "Add to Firefox",
		image: firefox,
		version: "Minimum version 55",
	},
	{
		title: "Add to Opera",
		image: opera,
		version: "Minimum version 46",
	},
];

const Extension = () => {
	return (
		<div className="container">
			<section className="extension">
				<h2 className="extension__title">Download the Extension</h2>
				<p className="extension__desc">
					We've got more browsers in the pipeline. Please do let us know if
					you've got a favourite you'd like us to prioritize.
				</p>
				<div className="extension__cards">
					{extensions.map((extension, i) => (
						<ExtensionCard {...extension} index={i} key={extension.title} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Extension;
