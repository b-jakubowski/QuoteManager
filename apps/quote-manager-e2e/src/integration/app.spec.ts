import { getGreeting } from '../support/app.po';

describe('quote-manager', () => {
	beforeEach(() => cy.visit('/'));

	it('should display welcome message', () => {
		getGreeting().contains('Welcome to quote-manager!');
	});
});
