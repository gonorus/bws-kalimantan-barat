import { IDevice } from "."

export function GetOfflineDevices() {
  return fetch('api/GetDevices').then(
    response => response.json().then(jsonResult => {
      return {
        ...jsonResult,
        response: [
          ...jsonResult.response.filter((device: IDevice) => device.status === 'offline')
        ]
      }
    })
  )
}