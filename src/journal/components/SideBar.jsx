import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


const SideBar = ({ drawerWidth = '240' }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' //temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper' : {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component = 'div'>Vadick Palomino</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Este es un texto de prueba para ver que tal aparece los textos'}/>

                                    </Grid>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

export default SideBar