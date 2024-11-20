import { Button, Grid2, ListItem } from "@mui/material"
import { red } from "@mui/material/colors"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles'
import SideBarControls from "./SideBarControls"
import SideBarResult from "./SideBarResult"
import { useState, useContext, createContext } from "react"

export const StateContext = createContext()

export default function SideBar() {

    // Item Object containing specific themes
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
    }));

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

    const {
        parentLat,
        parentLng,


        catAllowed,
        dogAllowed,
        noPetsAllowed,
    } = masterState

    return (
        <div className="sidebar-overlay" style={{width: "100%"}}>
            
            <Grid container spacing={2} margin={2}>
                <Grid size={8}>
                </Grid>

                <Grid size={4}>

                    {/* Main Side Bar containing controls */}
                    <Item>

                        <StateContext.Provider value={masterState}>
                            <SideBarResult/>
                            <SideBarControls/>
                        </StateContext.Provider>
                    </Item>
                    
                </Grid>

            </Grid>
            
            
        </div>
    )
}