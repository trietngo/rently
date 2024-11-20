import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import { Margin } from '@mui/icons-material';
import { useMapEvent, useMapEvents } from 'react-leaflet';
import { map } from 'leaflet';
import { useCallback, useContext, useEffect, useState } from 'react';
import { StateContext } from './SideBar';

export default function SideBarControlLocation() {

    const state = useContext(StateContext);

    const MapEvents = () => {
        useMapEvents({
          click(e) {

            console.log(e.latlng.lat);
            console.log(e.latlng.lng);
          },
        });
    
        return false;
    }

    const UpdateTextFields = () => {
        
        const center = {
            lat: 0,
            lng: 0     
        }

        const [position, setPosition] = useState(center)
        const map = useMapEvent('click', (e) => {
            // console.log("click")
            setPosition(e.latlng)

            // Update the master state
            state.parentLat = position.lat.toFixed(4)
            state.parentLng = position.lng.toFixed(4)
        })

        return (
            <>
                <TextField
                    required
                    id="latitude_value"
                    label="Latitude"
                    value={position.lat.toFixed(4)}
                    slotProps={{
                        input: {
                          readOnly: true,
                        },
                    }}
                    size='small'
                />
            
                <TextField
                    required
                    id="longitude_value"
                    label="Longitude"
                    value={position.lng.toFixed(4)}
                    slotProps={{
                        input: {
                          readOnly: true,
                        },
                    }}
                    size='small'
                />
            </>
            
        )
    }

    return (
        <div>
            {/* <MapEvents></MapEvents> */}
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <Typography>Location</Typography>
                </AccordionSummary>

                <AccordionDetails>

                <Box
                    component="form"
                    sx={{ mt: 0, '& .MuiTextField-root': { m: 1,  width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>

                        <UpdateTextFields></UpdateTextFields>
                        
                        {/* <TextField
                            required
                            id="latitude_value"
                            label="Latitude"
                            value={23}
                        />
                    
                        <TextField
                            required
                            id="longitude_value"
                            label="Longitude"
                            value={23}
                        /> */}

                        <TextField
                            id="location_state"
                            label="Nearest Settlement"
                            defaultValue="Castro Valley, CA"
                            slotProps={{
                                input: {
                                  readOnly: true,
                                },
                            }}
                            size='small'
                        />

                        
                    </div>

                </Box>

                    


                </AccordionDetails>
            </Accordion>
        </div>
    )
}
