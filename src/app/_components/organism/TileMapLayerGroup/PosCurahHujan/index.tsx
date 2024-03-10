import { LatLngExpression } from 'leaflet';
import { LayerGroup, LayersControl } from 'react-leaflet';
import { PosCurahHujanMarker } from './PosCurahHujanMarker';

const SAMPLE_POS: LatLngExpression[] = [
  [-0.278781, 111.475285],
  [0.0, 109.333336],
  [-1.859098, 109.971901],
];

export default function PosCurahHujan() {
  return (
    <LayersControl.Overlay checked name="Pos Curah Hujan">
      <LayerGroup>
        {SAMPLE_POS.map((location, index) => (
          <PosCurahHujanMarker
            key={`pos-curah-hujan-${index}`}
            position={location}
          />
        ))}
      </LayerGroup>
    </LayersControl.Overlay>
  );
}
