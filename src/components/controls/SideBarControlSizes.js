import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import { StateContext } from './SideBar';

export default function SideBarControlSizes() {

    const state = useContext(StateContext)

    // Local UI state
    const [bedCountLocal, setBedCountLocal] = useState('');
    const [bathCountLocal, setBathCountLocal] = useState('');
    const [sqftValueLocal, setSqftValueLocal] = useState('');

    const bedCountChangeHandler = (e) => {
        setBedCountLocal(e.target.value);
        state.bedSize = e.target.value;
    }

    const bathCountChangeHandler = (e) => {
        setBathCountLocal(e.target.value);
        state.bathSize = e.target.value;
    }

    const sqftValueChangeHandler = (e) => {
        setSqftValueLocal(e.target.value);
        state.areaSizeSqft = e.target.value;
    }

    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Sizes & Square Footage</Typography>
                </AccordionSummary>

                <AccordionDetails>

                    {/* Form portion Beds */}
                    <FormControl sx={{ m: 1, mt: 0, minWidth: 90 }} size="small">
                        <InputLabel id="demo-select-small-label">Beds</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bedCountLocal}
                            label="Beds"
                            onChange={bedCountChangeHandler}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Form portion Baths */}
                    <FormControl sx={{ m: 1, mt: 0, minWidth: 90 }} size="small">
                        <InputLabel id="demo-select-small-label">Baths</InputLabel>

                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bathCountLocal}
                            label="Beds"
                            onChange={bathCountChangeHandler}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={1.5}>1.5</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={2.5}>2.5</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>

                    </FormControl>

                    {/* Form Square Footage */}

                    <TextField
                        sx={{m: 1, mt: 0, minWidth: 90}}
                        required
                        id="sqftValue"
                        label="Square Footage"
                        defaultValue={''}
                        value={sqftValueLocal}
                        size='small'
                        onChange={sqftValueChangeHandler}
                    />


                </AccordionDetails>
            </Accordion>
        </div>
    )
}