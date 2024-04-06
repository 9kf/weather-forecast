export interface Places {
  type: string;
  features: Feature[];
  attribution: string;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Properties {
  name: string;
  mapbox_id: string;
  feature_type: string;
  place_formatted: string;
  context: Context;
  coordinates: Coordinates;
  bbox?: number[];
  language: string;
  maki: string;
  metadata: Metadata;
  address?: string;
  full_address?: string;
  poi_category?: string[];
  poi_category_ids?: string[];
  external_ids?: Externalids;
}

export interface Externalids {
  foursquare: string;
  safegraph?: string;
}

export interface Metadata {
  phone?: string;
  website?: string;
  open_hours?: Openhours;
}

export interface Openhours {
  periods: Period[];
}

export interface Period {
  open: Open;
  close: Open;
}

export interface Open {
  day: number;
  time: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  routable_points?: Routablepoint[];
}

export interface Routablepoint {
  name: string;
  latitude: number;
  longitude: number;
}

export interface Context {
  country: Country;
  region?: Region;
  postcode?: Postcode;
  place?: Postcode;
  locality?: Postcode;
  neighborhood?: Postcode;
  address?: Address;
  street?: Street;
}

export interface Street {
  name: string;
}

export interface Address {
  name: string;
  address_number: string;
  street_name: string;
}

export interface Postcode {
  id: string;
  name: string;
}

export interface Region {
  name: string;
  region_code: string;
  region_code_full: string;
}

export interface Country {
  id?: string;
  name: string;
  country_code: string;
  country_code_alpha_3: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}
