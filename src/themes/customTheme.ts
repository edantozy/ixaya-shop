import { createTheme } from '@mui/material'
import { green, red } from '@mui/material/colors'

export const customTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FCF5EE'
        },
        primary: {
            main: '#E4D7C7',
            contrastText: '#494949'
        },
        secondary: {
            main: '#856C4D',
            contrastText: '#F59E33'
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                colorPrimary: red
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#FCF5EE'
                }
            }
        }
    }
})