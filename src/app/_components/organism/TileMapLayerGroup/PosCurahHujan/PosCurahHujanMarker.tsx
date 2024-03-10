import { Marker, MarkerProps, Tooltip } from 'react-leaflet';
import { PosCurahHujanToolTipInfo } from './PosCurahHujanToolTipInfo';
import { Icon, Point } from 'leaflet';

const PosCurahHujanIcon = new Icon({
  iconUrl: './muka-air.png',
  iconRetinaUrl: './muka-air.png',
  iconSize: new Point(30, 30),
});

export function PosCurahHujanMarker(props: MarkerProps) {
  return (
    <Marker {...props} icon={PosCurahHujanIcon}>
      <Tooltip
        className="pos-curah-hujan-info"
        direction="top"
        offset={[0, -10]}
        opacity={1}
        permanent
      >
        <PosCurahHujanToolTipInfo />
      </Tooltip>
    </Marker>
  );
}
