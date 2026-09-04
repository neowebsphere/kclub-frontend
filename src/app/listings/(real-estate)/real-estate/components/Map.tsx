'use client'
import { Icon } from '@iconify/react'
import L from 'leaflet'
import Image, { StaticImageData } from 'next/image'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'

import real01 from '@/assets/img/listings/real-estate/01.jpg'
import real02 from '@/assets/img/listings/real-estate/02.jpg'
import real03 from '@/assets/img/listings/real-estate/03.jpg'
import real04 from '@/assets/img/listings/real-estate/04.jpg'
import real05 from '@/assets/img/listings/real-estate/05.jpg'
import real06 from '@/assets/img/listings/real-estate/06.jpg'
import real07 from '@/assets/img/listings/real-estate/07.jpg'
import real08 from '@/assets/img/listings/real-estate/08.jpg'
import real09 from '@/assets/img/listings/real-estate/09.jpg'
import real10 from '@/assets/img/listings/real-estate/10.jpg'

type PropertyType = {
  id: number
  image: StaticImageData
  price: string
  address: string
  area: number
  bedrooms: number
  bathrooms: number
  garage: number
  coordinates: {
    lat: number
    lng: number
  }
}

const properties: PropertyType[] = [
  {
    id: 1,
    image: real01,
    price: '1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: 65,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    coordinates: {
      lat: 40.719,
      lng: -73.994,
    },
  },
  {
    id: 2,
    image: real02,
    price: '1,320',
    address: '517 82nd St, Brooklyn, NY 11209',
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    garage: 0,
    coordinates: {
      lat: 40.7225,
      lng: -73.998,
    },
  },
  {
    id: 3,
    image: real03,
    price: '1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    area: 75,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    coordinates: {
      lat: 40.723,
      lng: -73.99,
    },
  },
  {
    id: 4,
    image: real04,
    price: '1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    area: 42,
    bedrooms: 1,
    bathrooms: 1,
    garage: 0,
    coordinates: {
      lat: 40.7176,
      lng: -74,
    },
  },
  {
    id: 5,
    image: real05,
    price: '1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    area: 54,
    bedrooms: 1,
    bathrooms: 1,
    garage: 0,
    coordinates: {
      lat: 40.7279,
      lng: -74,
    },
  },
  {
    id: 6,
    image: real06,
    price: '2,750',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: 108,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    coordinates: {
      lat: 40.7292,
      lng: -73.996,
    },
  },
  {
    id: 7,
    image: real07,
    price: '1,490',
    address: '123 Bedford Avenue, Brooklyn, NY 11211',
    area: 80,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    coordinates: {
      lat: 40.7264,
      lng: -73.994,
    },
  },
  {
    id: 8,
    image: real08,
    price: '1,560',
    address: '124 Maple Street, Brooklyn, NY 11211',
    area: 50,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    coordinates: {
      lat: 40.721,
      lng: -74.004,
    },
  },
  {
    id: 9,
    image: real09,
    price: '3,860',
    address: '212 Harrison Street, Brooklyn, NY 11240',
    area: 130,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    coordinates: {
      lat: 40.717,
      lng: -73.992,
    },
  },
  {
    id: 10,
    image: real10,
    price: '2,950',
    address: '456 Court Street, Brooklyn, NY 11231',
    area: 96,
    bedrooms: 3,
    bathrooms: 1,
    garage: 1,
    coordinates: {
      lat: 40.725,
      lng: -74.002,
    },
  },
]

const createCustomIcon = (price: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="relative flex flex-col items-center">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary shadow-lg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>

        <div class="mt-2 rounded-lg bg-white px-3 py-1 text-sm font-semibold shadow-md whitespace-nowrap text-default-700">
          $${price}
        </div>
      </div>
    `,
    iconSize: [60, 80],
    iconAnchor: [30, 80],
    popupAnchor: [0, -80],
  })
}

const Map = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="map-section sticky top-[82px] h-[calc(100vh-82px)]">
          <MapContainer center={[40.721, -73.997]} zoom={14} scrollWheelZoom zoomControl={false} className="flex flex-col w-full h-full">
            <ZoomControl position="bottomright" />

            <TileLayer attribution="© Maptiler © OpenStreetMap contributors" url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=rqrCHwDtUZCUA2fCt3vV" tileSize={512} zoomOffset={-1} />

            {properties.map((property) => (
              <Marker key={property.id} position={[property.coordinates.lat, property.coordinates.lng]} icon={createCustomIcon(property.price)}>
                <Popup closeButton={false} className="property-popup">
                  <div className="w-[280px] overflow-hidden rounded-xl bg-white">
                    <div className="relative">
                      <Image src={property.image} alt={property.address} className="h-[190px] w-full object-cover" />
                    </div>

                    <div className="p-4">
                      <h3 className="mb-2 text-xl font-semibold text-default-900">${property.price}</h3>
                      <p className="mb-2 text-sm text-default-700">{property.address}</p>
                      <p className="mb-4 text-sm font-semibold text-default-900">{property.area} sq.m</p>

                      <div className="flex items-center gap-4 text-sm text-default-700">
                        <div className="flex items-center gap-1">
                          {property.bedrooms}
                          <Icon icon="lucide:bed-single" className="size-4 text-default-500" />
                        </div>

                        <div className="flex items-center gap-1">
                          {property.bathrooms}
                          <Icon icon="lucide:shower-head" className="size-4 text-default-500" />
                        </div>

                        <div className="flex items-center gap-1">
                          {property.garage}
                          <Icon icon="lucide:car" className="size-4 text-default-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Map
