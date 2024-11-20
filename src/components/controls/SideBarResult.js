import { Button } from "@mui/material"
import { useContext } from "react"
import { StateContext } from "./SideBar"

export default function SideBarResult() {

    const state = useContext(StateContext)

    const helloWorldHandler = () => {
        console.log(state);
        
        console.log("CURRENT INPUTS:" + 
            '\n' + "Lat: " + state.parentLat + 
            '\n' + "Lng: " + state.parentLng +

            '\n' + "Bed: " + state.bedSize +
            '\n' + "Bath: " + state.bathSize +
            '\n' + "Sqft: " + state.areaSizeSqft +

            '\n' + "Apartment: " + (state.apartmentType ? 1 : 0) +
            '\n' + "Commercial: " + (state.commercialType ? 1 : 0) +
            '\n' + "Condo: " + (state.condoType ? 1 : 0) +
            '\n' + "Home: " + (state.homeType ? 1 : 0) +
            '\n' + "Housing: " + (state.housingType ? 1 : 0) +
            '\n' + "Other: " + (state.otherType ? 1 : 0) +
            '\n' + "Rent: " + (state.rentType ? 1 : 0) +
            '\n' + "Retail: " + (state.retailType ? 1 : 0) +
            '\n' + "Short-term: " + (state.shortTermType ? 1 : 0) +

            '\n' + "AC: " + (state.acOffered ? 1 : 0) +
            '\n' + "Alarm: " + (state.alarmOffered ? 1 : 0) +
            '\n' + "Basketball: " + (state.basketballOffered ? 1 : 0) +
            '\n' + "Cable or Satellite: " + (state.cableSatelliteOffered ? 1 : 0) +
            '\n' + "Clubhouse: " + (state.clubhouseOffered ? 1 : 0) +
            '\n' + "Dishwasher: " + (state.dishwasherOffered ? 1 : 0) +
            '\n' + "Doorman: " + (state.doormanOffered ? 1 : 0) +
            '\n' + "Elevator: " + (state.elevatorOffered ? 1 : 0) +
            '\n' + "Fireplace: " + (state.fireplaceOffered ? 1 : 0) +
            '\n' + "Garbage Disposal: " + (state.garbageDisposalOffered ? 1 : 0) +
            '\n' + "Gated: " + (state.gatedOffered ? 1 : 0) +
            '\n' + "Golf: " + (state.golfOffered ? 1 : 0) +
            '\n' + "Gym: " + (state.gymOffered ? 1 : 0) +
            '\n' + "Hot Tub: " + (state.hotTubOffered ? 1 : 0) +
            '\n' + "Internet Access: " + (state.internetOffered ? 1 : 0) +
            '\n' + "Parking: " + (state.parkingOffered ? 1 : 0) +
            '\n' + "Patio/Deck: " + (state.patioDeckOffered ? 1 : 0) +
            '\n' + "Playground: " + (state.playgroundOffered ? 1 : 0) +
            '\n' + "Pool: " + (state.poolOffered ? 1 : 0) +
            '\n' + "Refrigerator: " + (state.refrigeratorOffered ? 1 : 0) +
            '\n' + "Storage: " + (state.storageOffered ? 1 : 0) +
            '\n' + "TV: " + (state.tvOffered ? 1 : 0) +
            '\n' + "Tennis: " + (state.tennisOffered ? 1 : 0) +
            '\n' + "View: " + (state.viewOffered ? 1 : 0) +
            '\n' + "Washer Dryer: " + (state.washerDryerOffered ? 1 : 0) +
            '\n' + "Wood Floors: " + (state.woodfloorOffered ? 1 : 0) +
            '\n' + "No Amenities: " + (state.noAmenitiesOffered ? 1 : 0) +

            '\n' + "Cat: " + (state.catAllowed ? 1 : 0) +
            '\n' + "Dog: " + (state.dogAllowed ? 1 : 0) +
            '\n' + "No Pets: " + (state.noPetsAllowed ? 1 : 0))
    }

    const calculateRentHandler = () => {
        
    }

    return (
        <div style={{margin: "2rem"}}>
            <h1>$1,359/mo</h1>
            <Button color="secondary" variant="contained" onClick={() => helloWorldHandler()}>Estimate Rent Price</Button>
        </div>
    )
}