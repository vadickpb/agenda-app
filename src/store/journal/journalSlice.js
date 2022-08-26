import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: '1234',
        //     title: "",
        //     body: '',
        //     date: 123446,
        //     imageUrls: []
        // }

    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload

        },
        setSaving: (state) => {
            state.isSaving = true
            //TODO mensaje de error
        },
        updatedNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if (note.id === action.payload.id){
                    return action.payload
                }
                return note
            })

        },
        deleteNoteById: (state, action) => {

        },

    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updatedNote,
} = journalSlice.actions;