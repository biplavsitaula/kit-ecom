import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Location = {
  id: number;
  position: [number, number];
  vendorName: string;
  productCount: number;
  avgPrice: number;
};

const customIcon: any = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
}) as any;

export type MapViewProps = {
  locations: Location[];
};

export function MapView({ locations }: MapViewProps) {
  return (
    <div
      style={{
        margin: "0 clamp(8px, 3vw, 32px)",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        overflow: "hidden",
        height: "clamp(280px, 50vh, 600px)",
        minHeight: "280px",
        width: "auto",
        position: "relative",
        zIndex: 0,
        isolation: "isolate",
      }}
    >
      <MapContainer
        center={[40.7589, -73.9851]}
        zoom={12}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={customIcon}
          >
            <Popup>
              <div style={{ minWidth: "140px" }}>
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  {location.vendorName}
                </h3>
                <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>
                  Products: {location.productCount}
                </p>
                <p style={{ margin: "2px 0", fontSize: "13px", color: "#555" }}>
                  Avg Price: ${location.avgPrice}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
