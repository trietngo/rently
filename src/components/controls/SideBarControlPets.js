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

export default function SideBarControlPets() {

    const state = useContext(StateContext)

    // Set initial states for each checkbox
    // By default, 'none' option is checked
    const [localState, setLocalState] = useState({
        // catAllowed: false,
        // dogAllowed: false,
        // noPetsAllowed: true,
        state
    })

    // Destructure the state, allowing each attribute to be extracted individually 
    const { catAllowed, dogAllowed, noPetsAllowed } = localState;

    // Non-none handlers:
    // If either 'cat' or 'dog' or both are selected
    // 'none' option is deselected
    const changeHandler = (e) => {

        state[e.target.name] = e.target.checked

        state.noPetsAllowed = !state.catAllowed && !state.dogAllowed;

        console.log(state);

        setLocalState({
            ...localState,
            [e.target.name]: e.target.checked,
            noPetsAllowed: false
        })
    }

    // None handler
    // If 'none' option is selected
    // other options are not selected
    const changeHandlerNone = (e) => {

        setLocalState({
            ...localState,
            [e.target.name]: true,
            catAllowed: false,
            dogAllowed: false
        })

        state.catAllowed = false;
        state.dogAllowed = false;
        state[e.target.name] = !state.catAllowed && !state.dogAllowed;

        console.log(state);
    }

    // const [checked, setChecked] = useState([false, true])

    // const changeHandlerCat = (e) => {
    //     setChecked([e.target.checked, checked[0]])
    // }

    // const changeHandlerDog = (e) => {
    //     setChecked([checked[1], e.target.checked])
    // }

    // const changeHandlerNone = (e) => {
    //     setChecked([e.target.checked, e.target.checked])
    // }

    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Pets Allowed</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Select all that apply:</Typography>
                    <FormControl component="fieldset" variant="standard">
                    {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={!!catAllowed} onChange={changeHandler} name="catAllowed" />
                                }
                                label="Cat"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={!!dogAllowed} onChange={changeHandler} name="dogAllowed" />
                                }
                                label="Dog"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={noPetsAllowed || (!catAllowed && !dogAllowed)} onChange={changeHandlerNone} name="noPetsAllowed" />
                                }
                                label="No Pets Allowed"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}