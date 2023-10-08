import React, { Component } from 'react';

class Options extends Component {
	render() {
		const { options, selectedOption, onOptionChange } = this.props;

		return (
			<div className='options grid grid-cols-2 mx-2 my-1'>
				{options.map((option, index) => (
					<div key={index} className="form-check mx-2 my-2">
						<input
							type="radio"
							name="option"
							value={option}
                            id={option}
							checked={selectedOption === option}
							onChange={onOptionChange}
							className="form-check-input cursor-pointer text-base mx-2 my-2"
						/>
						<label htmlFor={option} className="form-check-label cursor-pointer">{option}</label>
					</div>
				))}
			</div>
		);
	}
}

export default Options;
