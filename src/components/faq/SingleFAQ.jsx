import arrow from "../../images/icon-arrow.svg";
const SingleFAQ = ({ question, answer }) => {
	return (
		<details className="singleFaq">
			<summary className="singleFaq__question">
				{question}
				<img src={arrow} alt="expand" />
			</summary>
			<p className="singleFaq__answer">{answer}</p>
		</details>
	);
};

export default SingleFAQ;
