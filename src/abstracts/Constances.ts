export const apiUrl = process.env.REACT_APP_RUNNING_IN_DOCKER === "true" ? "https://backend.myolink.info.gf/api/" : "http://localhost:8000/api/";

export interface Dictionary<T> {
	[Key: string]: T;
}
