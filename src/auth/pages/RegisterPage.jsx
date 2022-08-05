import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"


const RegisterPage = () => {
    return (
        <AuthLayout title='Registro'>

            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>
                    
                    <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">
                        <Grid item xs={12} sm={12} >
                            <Button variant="contained"  fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>
                    <Grid container direction="row" justifyContent="end" sx={{mt:2  }}>
                                <Typography sx = {{mr:2  }}>¿Ya tienes una cuenta?</Typography>
                                <Link component={RouterLink} color='inherit' to="/auth/login">
                                    Ingresar
                                </Link>
                            </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage