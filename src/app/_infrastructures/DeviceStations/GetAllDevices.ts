export function GetAllDevices() {
  return fetch('api/GetDevices').then(
    response => response.json()
  )
}