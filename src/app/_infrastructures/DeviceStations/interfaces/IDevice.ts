import { IArrDeviceData, IAwlrDeviceData, IDeviceBrand, IDeviceLocation } from ".";

export interface IDeviceBase {
  readonly type: 'AWLR' | 'ARR';
  readonly id: string;
  readonly name: string;
  readonly status: 'online' | 'offline'
  readonly device_id: string;
}

export interface IArrDevice extends IDeviceBase, IDeviceBrand, IDeviceLocation, IArrDeviceData {
  readonly type: 'ARR';
}

export interface IAwlrDevice extends IDeviceBase, IDeviceBrand, IDeviceLocation, IAwlrDeviceData {
  readonly type: 'AWLR';
}

export type IDevice = IArrDevice | IAwlrDevice;