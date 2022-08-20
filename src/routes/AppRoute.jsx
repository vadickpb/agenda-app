import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRouter from '../auth/routes/AuthRouter';
import { useCheckingAuth } from '../hooks/useCheckingAuth';
import JournalRoutes from '../journal/routes/JournalRoutes';
import ChekingAuth from '../ui/components/ChekingAuth';


const AppRoute = () => {

    const {status} = useCheckingAuth()

    if (status === 'checking') {
        return (
            <ChekingAuth />
        )
    }

    return (
        <Routes>

            {
                (status === 'authenticated') 
                ? (<Route path='/*' element={<JournalRoutes />} />) 
                : (<Route path='/auth/*' element={<AuthRouter />} />) 
            }

            <Route path='/*' element= {<Navigate to = "/auth/login" />} />

            {/* Login Routes */}
            {/* Journal Routes */}
        </Routes>
    )
}

export default AppRoute