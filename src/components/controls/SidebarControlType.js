import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
import { useContext, useState } from 'react';
import { Checkbox } from '@mui/material';
import { StateContext } from '../Map';

export default function SideBarControlType() {

    const state = useContext(StateContext)

    // Set initial states for each checkbox
    // By default, 'none' option is checked
    const [localState, setLocalState] = useState({
        // apartmentType: false,
        // commercialType: false,
        // condoType: false,
        // homeType: false,
        // retailType: false,
        // shortTermType: false,
        // otherType: false,
        state
    })

    // Destructure the state, allowing each attribute to be extracted individually 
    const { 
        apartmentType,
        commercialType,
        condoType,
        homeType,
        otherType,
        retailType,
        shortTermType, } = localState;

    // Non-none handlers:
    // If either 'cat' or 'dog' or both are selected
    // 'none' option is deselected
    const changeHandler = (e) => {

        state[e.target.name] = e.target.checked

        setLocalState({
            ...localState,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Property Type</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Select all that apply:</Typography>
                    <FormControl component="fieldset" variant="standard">
                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={apartmentType} onChange={changeHandler} name="apartmentType" />
                                }
                                label="Apartment"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={commercialType} onChange={changeHandler} name="commercialType" />
                                }
                                label="Commercial"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={condoType} onChange={changeHandler} name="condoType" />
                                }
                                label="Condo"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={homeType} onChange={changeHandler} name="homeType" />
                                }
                                label="Home"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={retailType} onChange={changeHandler} name="retailType" />
                                }
                                label="Retail"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={shortTermType} onChange={changeHandler} name="shortTermType" />
                                }
                                label="Short-term"
                            />

                            <FormControlLabel
                                control={
                                <Checkbox checked={otherType} onChange={changeHandler} name="otherType" />
                                }
                                label="Other"
                            />


                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}