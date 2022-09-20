import { Float } from "@airtasker/spot";

export interface GeoJson {
    type: string,
    name: string,
    crs: {
        type: string,
        properties: {
            name: string
        }
    },
    features: Feature[],
    errno: number
};

export interface Feature {
    type: "Feature",
    properties: Properties & { Nth: Properties },
    geometry: Point
};

export interface Properties {
    SL_NO: number,
    AA: string,
    Solar_ID: string,
    Placed_IN: string,
    Latitude: number,
    Longitude: number,
    DoC: string,
    Phase: string,
    color: string,
    icon: string,
    sys_id: string,
}

interface Point {
    type: "Point",
    coordinates: Float[]
};