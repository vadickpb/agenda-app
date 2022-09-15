import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useMemo } from "react"

import { useSelector } from "react-redux"
import Swal from "sweetalert2"

import 'sweetalert2/dist/sweetalert2.css'

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks/useForm"
import ImageGallery from "../components/ImageGallery"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNotes, startLoadingFiles, startSaveNote } from "../../store/journal/thunks"
import { useRef } from "react"


const NoteView = () => {

    const dispatch = useDispatch()
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        let otherDate = new Date(date)
        return otherDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])
    
    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }
    
    const onFileInputChange = ({target}) => {

        if (target.files === 0) return;
        console.log('subiendo archivos');
        dispatch(startLoadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNotes());
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

            <input 
                type='file' 
                multiple 
                ref={fileInputRef}
                onChange={onFileInputChange}
                style = {{display: 'none'  }}
            />

            <IconButton
                color="primary"
                disabled = {isSaving}
                onClick ={() => fileInputRef.current.click()}
            >
                <UploadOutlined />
            </IconButton>
            <Grid item>
                <Button
                    disabled = {isSaving}
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

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx = {{mt: 2  }}
                    color = "error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid>
            <ImageGallery images = {note.imageUrls}/>
        </Grid>
    )
}

export default NoteView