import { Drawer } from "@mui/material"
import { FC, useContext } from "react"
import { UIContext } from "../../context/ui"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const RightDrawer: FC<Props> = ({ children }) => {
    const { rightDrawerOpen, closeRightDrawer } = useContext(UIContext)

    return (
        <Drawer
            anchor="right"
            open={rightDrawerOpen}
            onClose={closeRightDrawer}
        >
            {children}
        </Drawer>
    )
}
