import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';
import { useState } from 'react';

export default function SideBarControlUsage() {

    const [value, setValue] = useState('rent')

    const changeHandler = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Property Usage (Choose One)</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    
                    <FormControl component="fieldset" variant="standard">
                        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                        <RadioGroup
                            aria-labelledby="radio-buttons-group"
                            name="rental-usage-button-group"
                            defaultValue="rentUsage"
                            value={value}
                            onChange={changeHandler}
                        >
                            <FormControlLabel
                                value="rentUsage"
                                control={<Radio />}
                                label="Rent"
                            />
                            <FormControlLabel
                                value="retailUsage"
                                control={<Radio />}
                                label="Retail"
                            />

                            <FormControlLabel
                                value="shortTermUsage"
                                control={<Radio />}
                                label="Short-term"
                            />
                            
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}