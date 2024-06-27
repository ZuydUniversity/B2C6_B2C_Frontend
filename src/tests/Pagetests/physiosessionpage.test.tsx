import PhysioSessionPage from "../../pages/physiosessionpage";
import { render } from "@testing-library/react";

describe("PhysioSessionPage test", () => {
	it("Should rendere page without failing", () => {
		render(<PhysioSessionPage />);
	})
});