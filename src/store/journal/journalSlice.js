import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        saving: true,
        messageSaved: '',
        notes: [],
        // active: null,
        active: {
            id: '1234',
            title: "",
            body: '',
            date: 123446,
            imageUrls: []
        }

    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updatedNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },

    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSavingm,
    updatedNote,
    deleteNoteById
} = journalSlice.actions;