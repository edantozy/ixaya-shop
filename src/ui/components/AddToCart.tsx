import { FC } from "react"
import { Button, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { numberToCurrency } from "../../helpers"
import { useQuantity } from "../../hooks"

interface Props {
    onAdd: (quantity: number) => void,
    priceDiscounted: number
}

export const AddToCart: FC<Props> = ({ onAdd, priceDiscounted }) => {
    const { add, remove, quantity } = useQuantity()

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton aria-label="delete" color="default" onClick={remove} sx={{ backgroundColor: '#EAEAEA' }}>
                <RemoveIcon />
            </IconButton>
            <Typography variant="body1" display="block" m="0 1rem">{quantity}</Typography>
            <IconButton aria-label="delete" color="default" onClick={add} sx={{ backgroundColor: '#EAEAEA' }}>
                <AddIcon />
            </IconButton>
            <Button sx={{ margin: '0 1rem' }} variant="contained" color="info" disableElevation onClick={() => onAdd(quantity)}>
                Agregar {numberToCurrency(priceDiscounted * quantity)}
            </Button>
        </Box>
    )
}
