import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import AuthLayout from "../layout/AuthLayout"
import { useDispatch, useSelector } from "react-redux"
import { startRegisterWithEmailPassword } from "../../store/auth/thunks"
import { useMemo } from "react"

const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']

}

const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth)

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const { displayName, email, password, formState, onInputChange, displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations)


    const onFormSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        if (!isFormValid) return;

        dispatch(startRegisterWithEmailPassword(formState))

    }

    return (
        <AuthLayout title='Registro'>

            <form onSubmit={onFormSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            placeholder="Nombre Completo"
                            fullWidth
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="correo"
                            type="email"
                            name="email"
                            onChange={onInputChange}
                            value={email}
                            placeholder="correo@google.com"
                            fullWidth
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="contraseña"
                            type="password"
                            onChange={onInputChange}
                            name="password"
                            value={password}
                            placeholder="Contraseña"
                            fullWidth
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">

                        <Grid 
                            item 
                            xs={12} sm={12} 
                            display = {!!errorMessage ? '' : 'none'}
                        >
                            <Alert
                                severity="error"
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={isCheckingAuthentication}
                                fullWidth
                            >
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>
                    <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
                        <Typography sx={{ mr: 2 }}>¿Ya tienes una cuenta?</Typography>
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