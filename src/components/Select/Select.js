import React from 'react';
import './Select.css';

const Select = (props) => {
	const { id, onChange, value, disabled, children } = props;
	return (
		<select className="Select" id={id} data-testid={id} onChange={onChange} value={value} disabled={disabled}>
			{children}
		</select>
	);
};

export default Select;
