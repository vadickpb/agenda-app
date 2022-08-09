import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import ImageGallery from "../components/ImageGallery"


const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={28} fontWeight='light'>20 de Agosto, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx = {{ padding: 2 }}>
                    <SaveOutlined sx ={{ fontSize:30, mr: 1 }} />
                    Guardar
                </Button>
                

            </Grid>

            <Grid container>

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder = "Ingrese un Título"
                    label="Título"
                    sx={{border: 'none', mb:1}}
                />
                <TextField 
                    type="text"
                    fullWidth
                    variant="filled"
                    multiline
                    placeholder = "¿Que sucedió hoy?"
                    sx={{border: 'none', mb:1}}
                    minRows={5}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}

export default NoteView