import { UIState } from './'

type UIActionType =
    | { type: '[UI] - Open Sidebar' }
    | { type: '[UI] - Close Sidebar' }
    | { type: '[UI] - Open Bottom Drawer' }
    | { type: '[UI] - Close Bottom Drawer' }
    | { type: '[UI] - Set Product To Add', payload: any }
    | { type: '[UI] - Open Right Drawer' }
    | { type: '[UI] - Close Right Drawer' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        case '[UI] - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }
        case '[UI] - Open Bottom Drawer':
            return {
                ...state,
                bottomDrawerOpen: true
            }
        case '[UI] - Close Bottom Drawer':
            return {
                ...state,
                bottomDrawerOpen: false
            }
        case '[UI] - Set Product To Add':
            return {
                ...state,
                productToAdd: action.payload
            }
        case '[UI] - Open Right Drawer':
            return {
                ...state,
                rightDrawerOpen: true
            }
        case '[UI] - Close Right Drawer':
            return {
                ...state,
                rightDrawerOpen: false
            }
        default:
            return state;
    }
}
