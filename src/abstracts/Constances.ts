export const apiUrl = process.env.HOSTNAME === "docker" || process.env.DOCKER === "true" ? "https://backend.myolink.info.gf/api/" : "localhost:8000/api/";

export interface Dictionary<T> {
	[Key: string]: T;
}
