import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { PosCurahHujan } from '@OrganismComponents/TileMapLayerGroup';

const center: LatLngExpression = [-0.278781, 111.475285];

function AddMapWatermark() {
  const attributionElements = document.getElementsByClassName(
    'leaflet-control-attribution leaflet-control'
  );
  if (attributionElements.length > 0) {
    const attributionParent = attributionElements[0].parentElement;
    // attributionElements[0].remove();
    attributionParent?.childNodes.forEach((childNode) => childNode.remove());

    const attributionElement = document.createElement('a');
    attributionElement.className =
      'leaflet-control-attribution leaflet-control';
    attributionElement.innerText = '©2024 Balai Wilayah Sungai Kalimantan I';
    attributionParent?.appendChild(attributionElement);
  }
}

export default function TileMapBeranda() {
  useEffect(() => {
    AddMapWatermark();
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={true}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />

      <LayersControl position="topright">
        <PosCurahHujan />
      </LayersControl>
    </MapContainer>
  );
}
