import { Marker, Popup, Tooltip } from 'react-leaflet';
import { PosCurahHujanToolTipInfo } from './PosCurahHujanToolTipInfo';
import { Icon, Point, LatLngExpression } from 'leaflet';
import { IDevice } from '@Infrastructures/DeviceStations';

const PosCurahHujanIcon = new Icon({
  iconUrl: './muka-air.png',
  iconRetinaUrl: './muka-air.png',
  iconSize: new Point(30, 30),
});

type PosCurahHujanMarkerProps = {
  position: LatLngExpression;
  device: IDevice;
};

export function PosCurahHujanMarker({
  position,
  device,
}: PosCurahHujanMarkerProps) {
  const OnPopupClosed = () => {
    console.debug('[GonoDebug] popup is been closed');
  };
  return (
    <Marker icon={PosCurahHujanIcon} position={position}>
      <Popup>Popup for Marker</Popup>
      <Tooltip
        className="pos-curah-hujan-info"
        direction="top"
        offset={[0, -10]}
        opacity={1}
        permanent
      >
        <PosCurahHujanToolTipInfo device={device} />
      </Tooltip>
    </Marker>
  );
}
