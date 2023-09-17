export interface GeoJSONData {
	type: string;
	features: GeoJSONDataFeatures[] | undefined;
}

export interface GeoJSONDataFeatures {
	type: string;
	geometry:
		| {
				type: string;
				coordinates:
					| number[][][][]
					| number[][][]
					| number[][]
					| number[]
					| number
					| null;
		  }
		| undefined
		| null;
	properties: GeoJSONPropertiesVisited;
}
export interface GeoJSONPropertiesVisited {
	ADMIN: string;
	ISO_A3: string;
	visited?: boolean;
}
