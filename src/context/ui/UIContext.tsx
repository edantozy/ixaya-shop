import { createContext } from 'react'
import { Order } from '../../interfaces'

export interface ContextProps { // Context Component Properties
    sideMenuOpen: boolean,
    openSideMenu: () => void,
    closeSideMenu: () => void,
    rightDrawerOpen: boolean,
    openRightDrawer: () => void,
    closeRightDrawer: () => void,
    bottomDrawerOpen: boolean,
    openBottomDrawer: () => void,
    closeBottomDrawer: () => void,
    productToAdd: any,
    setProductToAdd: (product: any) => void
}

export const UIContext = createContext({} as ContextProps)