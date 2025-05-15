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
import { StateContext } from '../Map';
import axios from 'axios';

export default function SideBarControlLocation() {

    const state = useContext(StateContext);

    // Get geo lat to pass into API
    const geoLat = state.parentLat
    const geoLng = state.parentLng

    // Get geoPos

    const UpdateTextFields = () => {
        
        const center = {
            lat: 0,
            lng: 0     
        }

        const [position, setPosition] = useState(center)

        const [geoPos, setGeoPos] = useState('');
        

        const [geoState, setGeoState] = useState('')
        const [geoCity, setGeoCity] = useState('')

        useEffect(() => {

            axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${state.parentLat}&lon=${state.parentLng}&format=jsonv2`)
                .then(response => {
                    setGeoPos(response.data)
                    
                })

            console.log("geoPos")
            // .catch(err => {
            //     console.error(err)
            // })

            const { address } = geoPos;

            if (address) {

                console.log(address)

                const { city, town, county, state } = address;

                setGeoState(state);
                setGeoCity(city ? city : town);

                console.log(geoCity);
                console.log(geoState); 
            }
            
        }, [geoPos])
        
        // const map = useMapEvent('click', (e) => {
        //     // console.log("click")
        //     setPosition(e.latlng)

        //     // Update the master state
        //     state.parentLat = position.lat.toFixed(4)
        //     state.parentLng = position.lng.toFixed(4)

        //     const { address } = geoPos;

        //     if (address) {

        //         console.log(address)
    
        //         const { city, town, county, state } = address;
    
        //         setGeoState(state);
        //         setGeoCity(city ? city : town);
    
        //         console.log(geoCity);
        //         console.log(geoState);
        //     }
        // })

        return (
            <>
                <TextField
                    required
                    id="latitude_value"
                    label="Latitude"
                    value={state.parentLat.toFixed(4)}
                    slotProps={{
                        input: {
                          readOnly: true,
                        },
                    }}
                    size='small'
                    style={{"maxWidth": "100%"}}
                />
            
                <TextField
                    required
                    id="longitude_value"
                    label="Longitude"
                    value={state.parentLng.toFixed(4)}
                    slotProps={{
                        input: {
                          readOnly: true,
                        },
                    }}
                    size='small'
                    style={{"maxWidth": "100%"}}
                />

                <TextField
                    id="location_state"
                    label="Nearest Settlement"
                    defaultValue={'City, State'}
                    value={ geoCity || geoState ? `${geoCity}, ${geoState}` : ''}
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                    size='small'
                    style={{"maxWidth": "100%"}}
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

                        

                        

                </Box>

                    


                </AccordionDetails>
            </Accordion>
        </div>
    )
}
