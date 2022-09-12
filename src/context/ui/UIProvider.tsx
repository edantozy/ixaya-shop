import { FC, ReactNode, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState { // Definition of the state values
    sideMenuOpen: boolean,
    rightDrawerOpen: boolean,
    bottomDrawerOpen: boolean,
    productToAdd: any
}

interface Props { children: ReactNode }

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    rightDrawerOpen: false,
    bottomDrawerOpen: false,
    productToAdd: {}
}

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: '[UI] - Open Sidebar' })
    const closeSideMenu = () => dispatch({ type: '[UI] - Close Sidebar' })
    const openBottomDrawer = () => dispatch({ type: '[UI] - Open Bottom Drawer' })
    const closeBottomDrawer = () => dispatch({ type: '[UI] - Close Bottom Drawer' })
    const setProductToAdd = (product: any) => dispatch({ type: '[UI] - Set Product To Add', payload: product })
    const openRightDrawer = () => dispatch({ type: '[UI] - Open Right Drawer' })
    const closeRightDrawer = () => dispatch({ type: '[UI] - Close Right Drawer' })


    return (
        <UIContext.Provider
            value={{
                ...state,
                openSideMenu,
                closeSideMenu,
                openBottomDrawer,
                closeBottomDrawer,
                setProductToAdd,
                openRightDrawer,
                closeRightDrawer
            }}
        >
            {children}
        </UIContext.Provider>
    )
}