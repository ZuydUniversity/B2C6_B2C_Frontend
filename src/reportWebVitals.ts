const reportWebVitals = () => {
	if (typeof window !== "undefined") {
		import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(console.log);
			getFID(console.log);
			getFCP(console.log);
			getLCP(console.log);
			getTTFB(console.log);
		});
	}
};

export default reportWebVitals;
