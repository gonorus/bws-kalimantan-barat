import { LatLng, LatLngExpression } from 'leaflet';
import { LayerGroup, LayersControl } from 'react-leaflet';
import { PosCurahHujanMarker } from './PosCurahHujanMarker';
import { useQuery } from '@tanstack/react-query';
import {
  DeviceStationContext,
  GetAllDevices,
  GetOnlineDevices,
  IGetDevicesResponse,
} from '@Infrastructures/DeviceStations';

const SAMPLE_POS: LatLngExpression[] = [
  [-0.278781, 111.475285],
  [0.0, 109.333336],
  [-1.859098, 109.971901],
];

export default function PosCurahHujan() {
  const { isLoading, data } = useQuery<IGetDevicesResponse>({
    queryKey: [DeviceStationContext.POS_CURAH_HUJAN],
    queryFn: GetAllDevices,
  });

  if (isLoading) return null;
  return (
    <LayersControl.Overlay checked name="Pos Curah Hujan">
      <LayerGroup>
        {data?.response
          .filter(
            (device) => device.latitude !== null || device.longitude !== null
          )
          .map((device) => (
            <PosCurahHujanMarker
              key={device.id}
              position={new LatLng(device.latitude ?? 0, device.longitude ?? 0)}
              device={device}
            />
          ))}
      </LayerGroup>
    </LayersControl.Overlay>
  );
}
