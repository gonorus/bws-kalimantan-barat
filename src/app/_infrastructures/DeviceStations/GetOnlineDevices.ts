import { IDevice } from ".";

export function GetOnlineDevices() {
  return fetch('api/GetDevices').then(
    response => response.json().then(jsonResult => {
      return {
        ...jsonResult,
        response: [
          ...jsonResult.response.filter((device: IDevice) => device.status === 'online')
        ]
      }
    })
  )
}