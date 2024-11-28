import { Button, Grid2, ListItem } from "@mui/material"
import { red } from "@mui/material/colors"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles'
import SideBarControls from "./SideBarControls"
import SideBarResult from "./SideBarResult"
import { StateContext } from "../Map"

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

    return (
        <div className="sidebar-overlay" style={{width: "100%"}}>
            
            <Grid container spacing={2} margin={2}>
                <Grid size={8}>
                </Grid>

                <Grid size={4}>

                    {/* Main Side Bar containing controls */}
                    <Item>
                        <SideBarResult/>
                        <SideBarControls/>
                    </Item>
                    
                </Grid>

            </Grid>
            
            
        </div>
    )
}