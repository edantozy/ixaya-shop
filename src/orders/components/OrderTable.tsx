import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { FC } from "react"

type field = {
    name: string,
    value: string
}

interface Props {
    fields: field[]
}

export const OrderTable: FC<Props> = ({ fields }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {
                        fields.map(field => (
                            <TableRow
                                key={field.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography variant="body2" fontWeight={600}>{field.name}</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {field.value}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
