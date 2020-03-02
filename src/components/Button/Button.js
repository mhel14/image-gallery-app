import React from 'react';
import './Button.css';

const Button = (props) => {
	const { onClick, disabled, text, className } = props;

	return (
		<button
			data-testid="button"
			className={className ? className : 'pagination-btn'}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
