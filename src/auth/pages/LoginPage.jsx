import { useMemo } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { startGooogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import AuthLayout from "../layout/AuthLayout"

const LoginPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const { email, password, onInputChange, formState } = useForm({
        email: 'vaidk@gmail.com',
        password: '123456',
    })

    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(formState));
    }

    const onGoogleSignIn = () => {
        dispatch(startGooogleSignIn())
    }


    return (

        <AuthLayout title='Login'>
            <form onSubmit={onSubmit} >
                <Grid container className = 'animate__animated animate__fadeIn animate__faster'>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="correo"
                            name="email"
                            value={email}
                            type="email"
                            onChange={onInputChange}
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="contraseña"
                            name="password"
                            value={password}
                            type="password"
                            onChange={onInputChange}
                            placeholder="Contraseña"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>

                        <Grid 
                            display={!!errorMessage ? '' : 'none'}
                            item xs={12} sm={6}>
                            <Alert
                                severity="error"
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={isAuthenticated}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={onGoogleSignIn}
                                variant="contained"
                                fullWidth
                                disabled={isAuthenticated}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>
                                    Google
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
                            <Link component={RouterLink} color='inherit' to="/auth/register">
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
}

export default LoginPage