import { useDispatch } from "react-redux"

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { startLogOut } from "../../store/auth/thunks"


const NavBar = ( {drawerWidth = 240}) => {

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogOut())
  }
  return (
    <AppBar position="fixed"
        sx = {{
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`}
          }}
    >
        <Toolbar>
            <IconButton
              color="inherit"
              edge = "start"
              sx = {{mr:2, display: {sm: 'none'}  }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid 
              container
              direction="row"
              justifyContent="space-between"
              
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
              >
                JournalApp
              </Typography>

              <IconButton color="error" onClick={onLogout}>
                <LogoutOutlined />  
              </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar