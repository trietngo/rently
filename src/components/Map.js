import React, { useCallback, useState, useMemo } from "react";
import { createContext } from "react";
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

export const StateContext = createContext()

export default function Map() {

  const [masterState, setMasterState] = useState({

    // Sizes
    bedSize: 0.0,
    bathSize: 0.0,
    areaSizeSqft: 0,

    // Location
    parentLat: 0,
    parentLng: 0,

    // Property Type
    apartmentType: false,
    commercialType: false,
    condoType: false,
    homeType: false,
    housingType: true, // always true
    otherType: false,

    rentType: true, // always true
    retailType: false,
    shortTermType: false,
    
    // Amenities
    acOffered: false,
    alarmOffered: false,
    basketballOffered: false,
    cableSatelliteOffered: false,
    clubhouseOffered: false,
    dishwasherOffered: false,
    doormanOffered: false,
    elevatorOffered: false,
    fireplaceOffered: false,
    garbageDisposalOffered: false,
    gatedOffered: false,
    golfOffered: false,
    gymOffered: false,
    hotTubOffered: false,
    internetOffered: false,
    parkingOffered: false,
    patioDeckOffered: false,
    playgroundOffered: false,
    poolOffered: false,
    refrigeratorOffered: false,
    storageOffered: false,
    tvOffered: false,
    tennisOffered: false,
    viewOffered: false,
    washerDryerOffered: false,
    woodfloorOffered: false,
    noAmenitiesOffered: true,

    // Pets
    catAllowed: false,
    dogAllowed: false,
    noPetsAllowed: true,
  })

  // Update Marker Position on Map to match Coordinates
  const UpdateMarker = () => {
        
    const center = {
        lat: 0,
        lng: 0     
    }

    const [position, setPosition] = useState(center)
    const map = useMapEvent('click', (e) => {
        setPosition(e.latlng)

        masterState.parentLat = position.lat
        masterState.parentLng = position.lng
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

      <StateContext.Provider value={masterState}>
      <div className="map-container">

          <div className="sidebar-overlay">
            <SideBar></SideBar>
          </div>

          <div className="leaflet-container">
            <MapContainer
            center={[37.706, -122.08]}
            zoom={9}
            minZoom={5}
            scrollWheelZoom={true}
            maxBounds={[[90, -200], [15, -55]]}
            maxBoundsViscosity={1}
            >


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
          </div>

      </div>
      </StateContext.Provider>
      
    ),
    [],
  )

  return (
    <div>
      {displayMap}
    </div>
    
  );
}