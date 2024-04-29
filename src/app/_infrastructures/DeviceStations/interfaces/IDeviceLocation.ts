export interface IDeviceLocation {
  readonly latitude: number | null;
  readonly longitude: number | null;
  readonly watershed_name: string | null;
  readonly river_area_name: string | null;
  readonly village_name: string | null;
  readonly district_name: string | null;
  readonly regency_name: string | null;
  readonly province_name: string | null;
}