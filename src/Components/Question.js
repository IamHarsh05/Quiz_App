import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="flex flex-col">
				<p className="text-xl md:text-2xl">Question {question.id}</p>
				<h5 className="mt-2 text-lg">{question.question}</h5>
				<form onSubmit={onSubmit} className="my-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
