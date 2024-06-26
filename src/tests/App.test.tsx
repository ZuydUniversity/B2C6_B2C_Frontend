import App from "./../App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
	render(<App />);
});


describe('TypeScript Type Checking', () => {
	it('should correctly recognize React types from react-app-env.d.ts', () => {
		// TypeScript should recognize JSX and React components
		const element = <div>Hello, world!</div>;
		expect(element).toBeDefined();
	});
});