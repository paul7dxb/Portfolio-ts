export interface GeoJSONData {
	type: string;
		features: {
			type: string;
			geometry: {
				type: string;
				coordinates: [number,number][][][];
			};
			properties: {
				ADMIN: string;
				ISO_A3: string;
			};
		}[];
}

