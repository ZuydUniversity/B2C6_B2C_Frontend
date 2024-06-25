import { render, screen } from "@testing-library/react";
import DashboardPage, { PatientCard, patients } from "../../pages/dashboardpage";
import MiniKalender from "../../components/minikalender";

describe("Dashboard Page", () => {
	test("should render", () => {
		render(<DashboardPage />);

		const miniCalendar = document.querySelector(".calendar") as HTMLElement;
		expect(miniCalendar).toBeInTheDocument();
	});
});

describe("PatientCard Component", () => {
	test("should render", () => {
		const patient = patients[0];
		render(<PatientCard date={patient.date} name={patient.name} age={patient.age} diagnosis={patient.diagnosis} medication={patient.medication} appointments={patient.appointments} imageUrl={patient.imageUrl} />);

		const patientProfile = screen.queryByAltText(`${patient.name} profile`) as HTMLImageElement;
		expect(patientProfile).toBeInTheDocument();
		expect(patientProfile.src).toBe(patient.imageUrl);
	});
});
