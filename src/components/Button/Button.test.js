import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StoreProvider } from './../../context/StoreContext';
import Button from './Button';

it('renders button correctly', () => {
	const app = (
		<StoreProvider>
			<Button />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const button = getByTestId('button');

	expect(button).toBeDefined();
});

it('renders button text correctly', () => {
	const sampleText = 'Button text';
	const app = (
		<StoreProvider>
			<Button text={sampleText} />
		</StoreProvider>
	);
	const { getByText } = render(app);
	const button = getByText(sampleText);

	expect(button).toBeDefined();
});

it('disable button when needed', () => {
	const app = (
		<StoreProvider>
			<Button disabled={true} />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const button = getByTestId('button');

	expect(button).toBeDisabled();
});
