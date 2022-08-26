import { useDispatch } from "react-redux"

import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import ImageGallery from "../components/ImageGallery"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"


const NoteView = () => {

    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.journal)

    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        let otherDate = new Date(date)
        return otherDate.toUTCString()
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }
    

    return (
        <Grid container
            className='animate__animated animate__fadeIn animate__faster'
            direction='row'
            justifyContent='space-between'
            alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={28} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button 
                    onClick={onSaveNote}
                    color="primary" 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>


            </Grid>

            <Grid container>

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange= {onInputChange}

                />
                <TextField
                    type="text"
                    fullWidth
                    variant="filled"
                    multiline
                    placeholder='Ingrese aquí la descripción'
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    )
}

export default NoteView