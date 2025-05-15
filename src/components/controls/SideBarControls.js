import { Box } from '@mui/material';
import SideBarControlAmenities from './SideBarControlAmenities';
import SideBarControlLocation from './SideBarControlLocation';
import SideBarControlPets from './SideBarControlPets';
import SideBarControlSizes from './SideBarControlSizes';
import SideBarControlType from './SidebarControlType';
import SideBarControlUsage from './SideBarControlUsage';

export default function SideBarControls() {
    return (
        <Box 
            sx={{
                overflowY: "auto",
                maxHeight: {
                    sm: "50vh",
                    lg: "50vh"
                }
            }}
        >
            <div style={{marginBottom: "1rem"}}>
                <SideBarControlLocation
                    
                />
            </div>

            <div style={{marginBottom: "1rem"}}>
                <SideBarControlSizes/>
            </div>

            <div style={{marginBottom: "1rem"}}>
                <SideBarControlType/>
            </div>

            {/* <div style={{marginBottom: "1rem"}}>
                <SideBarControlUsage/>
            </div> */}

            <div style={{marginBottom: "1rem"}}>
                <SideBarControlAmenities/>
            </div>

            <div style={{marginBottom: "0"}}>
                <SideBarControlPets/>
            </div>
                
        </Box>
        
    )
}