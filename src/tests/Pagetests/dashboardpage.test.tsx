// Assuming necessary imports are already in place at the top of your test file

import { render } from "@testing-library/react";
import DashboardPage from "../../pages/dashboardpage";

describe('DashboardPage', () => {
    it('renders without crashing', () => {
      const { getByText } = render(<DashboardPage />);
      expect(getByText('Hallo, Dr. Johannes Doe')).toBeInTheDocument();
    });
  });