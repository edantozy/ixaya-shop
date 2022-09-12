import { ThemeProvider } from "@mui/system"
import CssBaseline from '@mui/material/CssBaseline'
import { customTheme } from "./themes"
import { AppRouter } from "./router/AppRouter"
import { UIProvider } from "./context/ui"
import { ShoppingCartProvider } from "./context/shopping-cart"
import { SnackbarProvider } from "notistack"

function IxayaShopApp() {
  return (
    <SnackbarProvider maxSnack={3}>
      <UIProvider>
        <ShoppingCartProvider>
          <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <AppRouter />
          </ThemeProvider>
        </ShoppingCartProvider>
      </UIProvider>
    </SnackbarProvider>
  )
}

export default IxayaShopApp
