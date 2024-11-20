import React, { useCallback, useState, useMemo } from "react";
import { 
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap, 
  useMapEvent, 
  useMapEvents} from "react-leaflet";
import SideBar from "./controls/SideBar";

export default function Map() {

  // Update Marker Position on Map to match Coordinates
  const UpdateMarker = () => {
        
    const center = {
        lat: 0,
        lng: 0     
    }

    const [position, setPosition] = useState(center)
    const map = useMapEvent('click', (e) => {
        setPosition(e.latlng)
    })

    return (
        <>
          <Marker position={[position.lat, position.lng]}>
            <Popup>
              Popup at pos {position.lat}, {position.lng}
            </Popup>
          </Marker>
        </>
        
    )
  }

  
  const displayMap = useMemo(
    () => (
      <>
        <MapContainer
        center={[37.706, -122.08]}
        zoom={9}
        minZoom={5}
        scrollWheelZoom={true}
        maxBounds={[[90, -200], [15, -55]]}
        maxBoundsViscosity={1}
        >

          <SideBar></SideBar>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LayersControl position="bottomright">

            <LayersControl.Overlay checked="true" name="Marker with popup">
              <UpdateMarker/>
            </LayersControl.Overlay>

          </LayersControl>
          
        </MapContainer>

        
      </>
      
    ),
    [],
  )

  return (
    <div>
      {displayMap}
    </div>
    
  );
}