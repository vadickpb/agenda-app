import { TheaterComedy } from "@mui/icons-material"
import { ThemeProvider } from "@mui/system"
import CssBaseline from '@mui/material/CssBaseline';
import { purpleTheme } from "./purpleTheme"


const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default AppTheme