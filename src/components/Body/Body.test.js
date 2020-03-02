import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../context/StoreContext';
import Body from './Body';

const app = (
	<StoreProvider>
		<Body />
	</StoreProvider>
);

const mockArrayOfPhotos = [
  { id: 1, urls: { small: "https://images.unsplash.com/photo-1583065822497-4e152dcaed22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ" } },
  { id: 2, urls: { small: "https://images.unsplash.com/photo-1583008440670-ddb4c98d6966?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ" } }
];

describe('Body component', () => {
	it('Renders the body component wrapper correctly', () => {
		const { getByTestId } = render(app);
		expect(getByTestId('body')).toBeDefined();
	});

	it('renders initial empty body', () => {
		const { getByTestId } = render(app);

		expect(getByTestId('empty-body')).toBeDefined();
	});

	it('renders gallery when photos are supplied and loaded', () => {
		const app = (
			<StoreProvider>
				<Body mockPhotos={mockArrayOfPhotos} />
			</StoreProvider>
		);
	  const { getByTestId } = render(app)
	  expect(getByTestId('gallery')).toBeDefined();
	})
});
