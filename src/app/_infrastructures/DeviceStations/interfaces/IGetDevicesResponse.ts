import { IDevice } from ".";

export interface IGetDevicesResponse {
  readonly metaData: {
    code: number;
    message: string;
  }
  readonly response: Array<IDevice>
}