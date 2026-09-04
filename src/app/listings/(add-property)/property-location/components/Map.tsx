'use client'
import L from 'leaflet'
import { useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'

type MarkerType = {
  id: number
  position: [number, number]
  title: string
  address: string
}

const markers: MarkerType[] = [
  {
    id: 1,
    position: [40.719, -73.994],
    title: 'Property location',
    address: '929 Hart Street, Brooklyn, NY, 11237',
  },
]

const Map = () => {
  const customIcon = useMemo(
    () =>
      L.divIcon({
        className: '',
        html: `
          <div class="flex items-center justify-center size-10 rounded-full bg-primary shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  )

  return (
    <div className="aspect-[21/9] overflow-hidden rounded-lg border border-border bg-default-200">
      <MapContainer center={[40.719, -73.994]} zoom={14} scrollWheelZoom zoomControl={false} className="h-full w-full z-0">
        <ZoomControl position="bottomright" />

        <TileLayer attribution="© Maptiler © OpenStreetMap contributors" url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=rqrCHwDtUZCUA2fCt3vV" tileSize={512} zoomOffset={-1} />

        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={customIcon}>
            <Popup closeButton={false}>
              <div className="rounded bg-body-bg p-3 shadow">
                <h6 className="mb-2 pb-1 font-semibold text-default-900">{marker.title}</h6>

                <p className="m-0 text-sm text-default-700">{marker.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
