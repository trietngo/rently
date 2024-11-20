import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
import { useContext, useState } from 'react';
import { Checkbox } from '@mui/material';
import { StateContext } from './SideBar';

export default function SideBarControlAmenities() {

    const state = useContext(StateContext)

    // Set initial states for each checkbox
    // By default, 'none' option is checked
    const [localState, setLocalState] = useState({
        // acOffered: false,
        // alarmOffered: false,
        // basketballOffered: false,
        // cableSatelliteOffered: false,
        // clubhouseOffered: false,
        // dishwasherOffered: false,
        // doormanOffered: false,
        // elevatorOffered: false,
        // fireplaceOffered: false,
        // garbageDisposalOffered: false,
        // gatedOffered: false,
        // golfOffered: false,
        // gymOffered: false,
        // hotTubOffered: false,
        // internetOffered: false,
        // parkingOffered: false,
        // patioDeckOffered: false,
        // playgroundOffered: false,
        // poolOffered: false,
        // refrigeratorOffered: false,
        // storageOffered: false,
        // tvOffered: false,
        // tennisOffered: false,
        // viewOffered: false,
        // washerDryerOffered: false,
        // woodfloorOffered: false,

        // noAmenitiesOffered: true,
        state
    })

    // Destructure the state, allowing each attribute to be extracted individually 
    const { 
        acOffered,
        alarmOffered,
        basketballOffered,
        cableSatelliteOffered,
        clubhouseOffered,
        dishwasherOffered,
        doormanOffered,
        elevatorOffered,
        fireplaceOffered,
        garbageDisposalOffered,
        gatedOffered,
        golfOffered,
        gymOffered,
        hotTubOffered,
        internetOffered,
        parkingOffered,
        patioDeckOffered,
        playgroundOffered,
        poolOffered,
        refrigeratorOffered,
        storageOffered,
        tvOffered,
        tennisOffered,
        viewOffered,
        washerDryerOffered,
        woodfloorOffered,

        noAmenitiesOffered } = localState;

    // Non-none handlers:
    // If either 'cat' or 'dog' or both are selected
    // 'none' option is deselected
    const changeHandler = (e) => {

        state[e.target.name] = e.target.checked

        state.noAmenitiesOffered = 
            !state.acOffered && 
            !state.alarmOffered &&
            !state.basketballOffered &&
            !state.cableSatelliteOffered &&
            !state.clubhouseOffered &&
            !state.dishwasherOffered &&
            !state.doormanOffered &&
            !state.elevatorOffered &&
            !state.fireplaceOffered &&
            !state.garbageDisposalOffered &&
            !state.gatedOffered &&
            !state.golfOffered &&
            !state.gymOffered &&
            !state.hotTubOffered &&
            !state.internetOffered &&
            !state.parkingOffered &&
            !state.patioDeckOffered &&
            !state.playgroundOffered &&
            !state.poolOffered &&
            !state.refrigeratorOffered &&
            !state.storageOffered &&
            !state.tvOffered &&
            !state.tennisOffered &&
            !state.viewOffered &&
            !state.washerDryerOffered &&
            !state.woodfloorOffered;

        setLocalState({
            ...localState,
            [e.target.name]: e.target.checked,
            noAmenitiesOffered: false
        })
    }

    // None handler
    // If 'none' option is selected
    // other options are not selected
    const changeHandlerNone = (e) => {

        setLocalState({
            ...localState,
            [e.target.name]: true,
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
            woodfloorOffered: false

        })

        state.acOffered = false
        state.alarmOffered = false
        state.basketballOffered = false
        state.cableSatelliteOffered = false
        state.clubhouseOffered = false
        state.dishwasherOffered = false
        state.doormanOffered = false
        state.elevatorOffered = false
        state.fireplaceOffered = false
        state.garbageDisposalOffered = false
        state.gatedOffered = false
        state.golfOffered = false
        state.gymOffered = false
        state.hotTubOffered = false
        state.internetOffered = false
        state.parkingOffered = false
        state.patioDeckOffered = false
        state.playgroundOffered = false
        state.poolOffered = false
        state.refrigeratorOffered = false
        state.storageOffered = false
        state.tvOffered = false
        state.tennisOffered = false
        state.viewOffered = false
        state.washerDryerOffered = false
        state.woodfloorOffered = false

        state[e.target.name] = 
            !state.acOffered && 
            !state.alarmOffered &&
            !state.basketballOffered &&
            !state.cableSatelliteOffered &&
            !state.clubhouseOffered &&
            !state.dishwasherOffered &&
            !state.doormanOffered &&
            !state.elevatorOffered &&
            !state.fireplaceOffered &&
            !state.garbageDisposalOffered &&
            !state.gatedOffered &&
            !state.golfOffered &&
            !state.gymOffered &&
            !state.hotTubOffered &&
            !state.internetOffered &&
            !state.parkingOffered &&
            !state.patioDeckOffered &&
            !state.playgroundOffered &&
            !state.poolOffered &&
            !state.refrigeratorOffered &&
            !state.storageOffered &&
            !state.tvOffered &&
            !state.tennisOffered &&
            !state.viewOffered &&
            !state.washerDryerOffered &&
            !state.woodfloorOffered;
    }

    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Amenities</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Select all that apply:</Typography>
                    <FormControl component="fieldset" variant="standard">
                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={!!acOffered} onChange={changeHandler} name="acOffered" />
                                }
                                label="AC"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!alarmOffered} onChange={changeHandler} name="alarmOffered" />
                                }
                                label="Alarm"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!basketballOffered} onChange={changeHandler} name="basketballOffered" />
                                }
                                label="Basketball"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!cableSatelliteOffered} onChange={changeHandler} name="cableSatelliteOffered" />
                                }
                                label="Cable/Satellite"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!clubhouseOffered} onChange={changeHandler} name="clubhouseOffered" />
                                }
                                label="Clubhouse"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!dishwasherOffered} onChange={changeHandler} name="dishwasherOffered" />
                                }
                                label="Dishwasher"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!doormanOffered} onChange={changeHandler} name="doormanOffered" />
                                }
                                label="Doorman"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!elevatorOffered} onChange={changeHandler} name="elevatorOffered" />
                                }
                                label="Elevator"
                            />
                            
                            <FormControlLabel
                                control={
                                <Checkbox checked={!!fireplaceOffered} onChange={changeHandler} name="fireplaceOffered" />
                                }
                                label="Fireplace"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!garbageDisposalOffered} onChange={changeHandler} name="garbageDisposalOffered" />
                                }
                                label="Garbage Disposal"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!gatedOffered} onChange={changeHandler} name="gatedOffered" />
                                }
                                label="Gated"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!golfOffered} onChange={changeHandler} name="golfOffered" />
                                }
                                label="Golf"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!gymOffered} onChange={changeHandler} name="gymOffered" />
                                }
                                label="Gym"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!hotTubOffered} onChange={changeHandler} name="hotTubOffered" />
                                }
                                label="Hot Tub"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!internetOffered} onChange={changeHandler} name="internetOffered" />
                                }
                                label="Internet"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!parkingOffered} onChange={changeHandler} name="parkingOffered" />
                                }
                                label="Parking"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!patioDeckOffered} onChange={changeHandler} name="patioDeckOffered" />
                                }
                                label="Patio/Deck"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!playgroundOffered} onChange={changeHandler} name="playgroundOffered" />
                                }
                                label="Playground"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!poolOffered} onChange={changeHandler} name="poolOffered" />
                                }
                                label="Pool"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!refrigeratorOffered} onChange={changeHandler} name="refrigeratorOffered" />
                                }
                                label="Refrigerator"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!storageOffered} onChange={changeHandler} name="storageOffered" />
                                }
                                label="Storage"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!tvOffered} onChange={changeHandler} name="tvOffered" />
                                }
                                label="TV"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!tennisOffered} onChange={changeHandler} name="tennisOffered" />
                                }
                                label="Tennis"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!viewOffered} onChange={changeHandler} name="viewOffered" />
                                }
                                label="View"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!washerDryerOffered} onChange={changeHandler} name="washerDryerOffered" />
                                }
                                label="Washer and Dryer"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={!!woodfloorOffered} onChange={changeHandler} name="woodfloorOffered" />
                                }
                                label="Wood Floors"
                            />

                            {/* None Option */}
                            <FormControlLabel
                                control={
                                <Checkbox checked={noAmenitiesOffered ||
                                    (!acOffered
                                        && !alarmOffered
                                        && !basketballOffered
                                        && !cableSatelliteOffered
                                        && !clubhouseOffered
                                        && !dishwasherOffered
                                        && !doormanOffered
                                        && !elevatorOffered
                                        && !fireplaceOffered
                                        && !garbageDisposalOffered
                                        && !gatedOffered
                                        && !golfOffered
                                        && !gymOffered
                                        && !hotTubOffered
                                        && !internetOffered
                                        && !parkingOffered
                                        && !patioDeckOffered
                                        && !playgroundOffered
                                        && !poolOffered
                                        && !refrigeratorOffered
                                        && !storageOffered
                                        && !tvOffered
                                        && !tennisOffered
                                        && !viewOffered
                                        && !washerDryerOffered
                                        && !woodfloorOffered)} onChange={changeHandlerNone} name="noAmenitiesOffered" />
                                }
                                label="No Amenities"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}