import { Button, Box } from "@mui/material"
import { useContext } from "react"
import { StateContext } from "../Map"
import { useState } from "react"
import { GitHub } from "@mui/icons-material"

import * as tf from '@tensorflow/tfjs'
// import * as tfn from '@tensorflow/tfjs-node'


export default function SideBarResult() {

    const state = useContext(StateContext)

    let model = `${process.env.PUBLIC_URL}/assets/model/model.json`

    const [price, setPrice] = useState(0)

    const calculateRentHandlerWorking = () => {

        setPrice(Math.floor(Math.random() * (6000 - 700) ) + 700)

        console.log(price)
    }

    // Import TensorFlow model
    const calculateRentHandler = async () => {
        console.log(state);

        const modelPath = `${process.env.PUBLIC_URL}/assets/model/model.json`

        const modelJSON = require(`../../tensorflow/keras/model.json`)

        // Load Tensorflow Model and predict
        model = await tf.models.modelFromJSON(modelJSON)

        const prediction = model.predict(tf.tensor(
            [[
                state.bedSize,
                state.bathSize,
                state.areaSizeSqft,

                state.parentLat,
                state.parentLng,

                state.apartmentType ? 1 : 0,
                state.commercialType ? 1 : 0,
                state.condoType ? 1 : 0,
                state.homeType ? 1 : 0,
                state.housingType ? 1 : 0,
                state.otherType ? 1 : 0,
                state.rentType ? 1 : 0,
                state.retailType ? 1 : 0,
                state.shortTermType ? 1 : 0,

                state.acOffered ? 1 : 0,
                state.alarmOffered ? 1 : 0,
                state.basketballOffered ? 1 : 0,
                state.cableSatelliteOffered ? 1 : 0,
                state.clubhouseOffered ? 1 : 0,
                state.dishwasherOffered ? 1 : 0,
                state.doormanOffered ? 1 : 0,
                state.elevatorOffered ? 1 : 0,
                state.fireplaceOffered ? 1 : 0,
                state.garbageDisposalOffered ? 1 : 0,
                state.gatedOffered ? 1 : 0,
                state.golfOffered ? 1 : 0,
                state.gymOffered ? 1 : 0,
                state.hotTubOffered ? 1 : 0,
                state.internetOffered ? 1 : 0,
                state.parkingOffered ? 1 : 0,
                state.patioDeckOffered ? 1 : 0,
                state.playgroundOffered ? 1 : 0,
                state.poolOffered ? 1 : 0,
                state.refrigeratorOffered ? 1 : 0,
                state.storageOffered ? 1 : 0,
                state.tvOffered ? 1 : 0,
                state.tennisOffered ? 1 : 0,
                state.viewOffered ? 1 : 0,
                state.washerDryerOffered ? 1 : 0,
                state.woodfloorOffered ? 1 : 0,
                state.noAmenitiesOffered ? 1 : 0,

                state.catAllowed ? 1 : 0,
                state.dogAllowed ? 1 : 0,
                state.noPetsAllowed ? 1 : 0,
            ]]
        ))

        console.log(prediction.data())
        
        // console.log("CURRENT INPUTS:" + 
        //     '\n' + "Lat: " + state.parentLat + 
        //     '\n' + "Lng: " + state.parentLng +

        //     '\n' + "Bed: " + state.bedSize +
        //     '\n' + "Bath: " + state.bathSize +
        //     '\n' + "Sqft: " + state.areaSizeSqft +

        //     '\n' + "Apartment: " + (state.apartmentType ? 1 : 0) +
        //     '\n' + "Commercial: " + (state.commercialType ? 1 : 0) +
        //     '\n' + "Condo: " + (state.condoType ? 1 : 0) +
        //     '\n' + "Home: " + (state.homeType ? 1 : 0) +
        //     '\n' + "Housing: " + (state.housingType ? 1 : 0) +
        //     '\n' + "Other: " + (state.otherType ? 1 : 0) +
        //     '\n' + "Rent: " + (state.rentType ? 1 : 0) +
        //     '\n' + "Retail: " + (state.retailType ? 1 : 0) +
        //     '\n' + "Short-term: " + (state.shortTermType ? 1 : 0) +

        //     '\n' + "AC: " + (state.acOffered ? 1 : 0) +
        //     '\n' + "Alarm: " + (state.alarmOffered ? 1 : 0) +
        //     '\n' + "Basketball: " + (state.basketballOffered ? 1 : 0) +
        //     '\n' + "Cable or Satellite: " + (state.cableSatelliteOffered ? 1 : 0) +
        //     '\n' + "Clubhouse: " + (state.clubhouseOffered ? 1 : 0) +
        //     '\n' + "Dishwasher: " + (state.dishwasherOffered ? 1 : 0) +
        //     '\n' + "Doorman: " + (state.doormanOffered ? 1 : 0) +
        //     '\n' + "Elevator: " + (state.elevatorOffered ? 1 : 0) +
        //     '\n' + "Fireplace: " + (state.fireplaceOffered ? 1 : 0) +
        //     '\n' + "Garbage Disposal: " + (state.garbageDisposalOffered ? 1 : 0) +
        //     '\n' + "Gated: " + (state.gatedOffered ? 1 : 0) +
        //     '\n' + "Golf: " + (state.golfOffered ? 1 : 0) +
        //     '\n' + "Gym: " + (state.gymOffered ? 1 : 0) +
        //     '\n' + "Hot Tub: " + (state.hotTubOffered ? 1 : 0) +
        //     '\n' + "Internet Access: " + (state.internetOffered ? 1 : 0) +
        //     '\n' + "Parking: " + (state.parkingOffered ? 1 : 0) +
        //     '\n' + "Patio/Deck: " + (state.patioDeckOffered ? 1 : 0) +
        //     '\n' + "Playground: " + (state.playgroundOffered ? 1 : 0) +
        //     '\n' + "Pool: " + (state.poolOffered ? 1 : 0) +
        //     '\n' + "Refrigerator: " + (state.refrigeratorOffered ? 1 : 0) +
        //     '\n' + "Storage: " + (state.storageOffered ? 1 : 0) +
        //     '\n' + "TV: " + (state.tvOffered ? 1 : 0) +
        //     '\n' + "Tennis: " + (state.tennisOffered ? 1 : 0) +
        //     '\n' + "View: " + (state.viewOffered ? 1 : 0) +
        //     '\n' + "Washer Dryer: " + (state.washerDryerOffered ? 1 : 0) +
        //     '\n' + "Wood Floors: " + (state.woodfloorOffered ? 1 : 0) +
        //     '\n' + "No Amenities: " + (state.noAmenitiesOffered ? 1 : 0) +

        //     '\n' + "Cat: " + (state.catAllowed ? 1 : 0) +
        //     '\n' + "Dog: " + (state.dogAllowed ? 1 : 0) +
        //     '\n' + "No Pets: " + (state.noPetsAllowed ? 1 : 0))
    }

    return (
        <div style={{margin: "2rem"}}>

            <h1>rently.</h1>

            <h1>{'$' + price}</h1>
            <p>per month per person</p>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button color="secondary" variant="contained" onClick={() => calculateRentHandlerWorking()}>Estimate Rent Price</Button>

                <Button sx={{ textDecoration: 'none' }} color="success" variant="outlined" href="https://github.com/trietngo/rently">See Repo on GitHub {' '} <GitHub/> </Button>
            </Box>
            
        </div>
    )
}