import { Routes, Route, Navigate} from 'react-router-dom';
import AuthRouter from '../auth/routes/AuthRouter';
import JournalRoutes from '../journal/routes/JournalRoutes';


const AppRoute = () => {
    return (
        <Routes>

            {/* Login Routes */}
            <Route path='/auth/*' element = {<AuthRouter />}/>
            {/* Journal Routes */}
            <Route path='/*' element = {<JournalRoutes/>} />
        </Routes>
    )
}

export default AppRoute