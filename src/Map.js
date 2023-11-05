import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  useEffect(() => {
    // Coordinates for Oulu, Finland
    const ouluLatitude = 65.0121
    const ouluLongitude = 25.4682
    const initialZoom = 13

    const map = L.map('map-container').setView(
      [ouluLatitude, ouluLongitude],
      initialZoom
    )
    // contribution
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    // marker
    const marker = L.icon({
      iconUrl: process.env.PUBLIC_URL + 'marker.svg',
      iconSize: [25, 25],
      iconAnchor: [12.5, 12.5]
    })

    // Marker locations
    const locations = [
      {
        name: 'Linnanmaa Prisma',
        latitude: 65.0575,
        longitude: 25.4679,
        icon: marker
      },
      {
        name: 'Kaijonharju K-Market',
        latitude: 65.0312,
        longitude: 25.4879,
        icon: marker
      },
      {
        name: 'Tuira Lidl',
        latitude: 65.0177,
        longitude: 25.4796,
        icon: marker
      },
      {
        name: 'Ritaharju Lidl',
        latitude: 65.0243,
        longitude: 25.4768,
        icon: marker
      },

      {
        name: 'Raksila Prisma',
        latitude: 65.0106,
        longitude: 25.4852,
        icon: marker
      }
    ]

    // Add markers for each location
    locations.forEach(location => {
      const marker = L.marker([location.latitude, location.longitude], {
        icon: location.icon
      }).addTo(map)
      marker.bindPopup(location.name)
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div id='map-container' style={{ width: '50%', height: '400px' }} />
}

export default Map
