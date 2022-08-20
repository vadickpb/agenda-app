import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseAuth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { login, logout } from "../store/auth/authSlice"


export const useCheckingAuth = () => {
    
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            console.log(user);
            if (!user) return dispatch(logout());
    
            const { uid, email, password, displayName, photoURL } = user
    
            dispatch(login({ uid, email, displayName, password, photoURL }))
        })
    }, [])
    
    return {
        status
    }

}