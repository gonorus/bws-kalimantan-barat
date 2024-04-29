export interface IAwlrDeviceData {
  readonly battery: number | null;
  readonly change_status: string | null;
  readonly change_value: number | null;
  readonly debit: number | null;
  readonly siaga1: any | null;
  readonly siaga2: any | null;
  readonly siaga3: any | null;
  readonly unit_display: string | null;
  readonly warning_status: any | null;
  readonly water_level: number | null;
  readonly water_level_elevation: number | null;
  readonly water_level_max: number | null;
  readonly water_level_min: number | null;
}