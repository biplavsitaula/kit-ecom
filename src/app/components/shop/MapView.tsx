import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
  id: number;
  position: [number, number];
  vendorName: string;
  productCount: number;
  avgPrice: number;
};

export type MapViewProps = {
  locations: Location[];
};

export function MapView({ locations }: MapViewProps) {
  return (
    <div className="mx-8 border rounded-lg h-150">
      <MapContainer
        center={[40.7589, -73.9851]}
        zoom={12}
        scrollWheelZoom={false}   // ✅ Disable zoom on scroll
        className="w-full h-150"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>
              <div>
                <h3 className="font-bold">{location.vendorName}</h3>
                <p>Products: {location.productCount}</p>
                <p>Avg Price: ${location.avgPrice}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
