import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../context/StoreContext';
import Loading from './Loading';

const app = (
	<StoreProvider>
		<Loading />
	</StoreProvider>
);

it("doesn't display the loading component on the dom unless isLoading is true", () => {
	const { queryByTestId } = render(app);
	const loadingComponent = queryByTestId('loading');

	expect(loadingComponent).toBeNull();
});

it('renders loading component if isLoading is true', () => {
	const app = (
		<StoreProvider>
			<Loading mockIsLoading={true} />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const loadingComponent = getByTestId('loading');

	expect(loadingComponent).toBeDefined();
});
