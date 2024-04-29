export interface IArrDeviceData {
  readonly battery: number | null;
  readonly intensity_hour: string | null;
  readonly rainfall: number | null;
  readonly rainfall_hour: number | null;
  readonly rainfall_max: number | null;
  readonly rainfall_min: number | null;
  readonly reading_at: string | null;
  readonly reading_hour: string | null;
}