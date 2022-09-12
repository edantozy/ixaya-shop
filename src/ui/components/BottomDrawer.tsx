import { useContext, FC } from 'react'
import { Drawer } from '@mui/material'
import { UIContext } from '../../context/ui'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const BottomDrawer: FC<Props> = ({ children }) => {
    const { bottomDrawerOpen, closeBottomDrawer } = useContext(UIContext)

    return (
        <Drawer
            anchor="bottom"
            open={bottomDrawerOpen}
            onClose={closeBottomDrawer}
        >
            {children}
        </Drawer>
    )
}
