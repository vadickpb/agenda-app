import { CircularProgress, Grid } from "@mui/material"

const ChekingAuth = () => {
    return (
        <Grid 
            container
            spacing={ 0 }
            direction= "column"
            alignItems="center"
            justifyContent= "center"
            sx={{minHeight: '100vh', minWidth: '100vw' ,backgroundColor: 'primary.main', padding: 4  }}
        >
            <Grid container
                direction="row"
                justifyContent="center"
            >
                <CircularProgress color="warning"/>
            </Grid>
            
        </Grid>
    )
}

export default ChekingAuth