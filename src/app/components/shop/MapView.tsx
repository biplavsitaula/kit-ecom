import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icon in leaflet
const createCustomIcon = (isHighlighted: boolean) => {
  return L.divIcon({
    html: `
      <div style="
        background-color: ${isHighlighted ? "#F59E0B" : "#16A34A"};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="transform: rotate(45deg);">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    `,
    className: "custom-marker",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
};

interface Location {
  id: number;
  position: [number, number];
  vendorName: string;
  productCount: number;
  avgPrice: number;
}

interface MapViewProps {
  locations: Location[];
  hoveredProductId: number | null;
  onMarkerClick: (locationId: number) => void;
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

export function MapView({
  locations,
  hoveredProductId,
  onMarkerClick,
}: MapViewProps) {
  const defaultCenter: [number, number] = [40.7128, -74.006]; // New York City

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        className="h-full w-full rounded-lg"
        scrollWheelZoom={true}
        style={{ background: "#F9FAFB" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={defaultCenter} />

        {locations.map((location) => {
          const isHighlighted = hoveredProductId === location.id;

          return (
            <Marker
              key={location.id}
              position={location.position}
              icon={createCustomIcon(isHighlighted)}
              eventHandlers={{
                click: () => onMarkerClick(location.id),
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-[#111827] mb-1">
                    {location.vendorName}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-1">
                    {location.productCount} products available
                  </p>
                  <p className="text-sm font-medium text-[#16A34A]">
                    Avg. ${location.avgPrice}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map Controls Info */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000]">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#16A34A] rounded-full"></div>
            <span className="text-[#6B7280]">Vendors</span>
          </div>
          <div className="flex items-center gap-1 ml-3">
            <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
            <span className="text-[#6B7280]">Highlighted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
