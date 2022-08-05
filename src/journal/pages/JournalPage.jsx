import { Typography } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import NoteView from '../views/NoteView'
import NothingSelectedView from '../views/NothingSelectedView'

const JournalApp = () => {
    return (
        <JournalLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />
            
        </JournalLayout>
    )
}

export default JournalApp