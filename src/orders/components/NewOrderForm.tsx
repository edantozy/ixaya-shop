import { FC } from 'react'
import { Box, Button, TextField, Stack } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

interface Props {
    onSubmit: (data: any) => void
}

export const NewOrderForm: FC<Props> = ({ onSubmit }) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            address: '',
            street_name: '',
            state: '',
            city: '',
            zip_code: '',
            phone: ''
        }
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <Stack spacing={2}>
                <Controller
                    name="address"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.address ? true : false} {...field}
                            helperText={errors.address ? 'Campo requerido' : ''}
                            label="Dirección"
                        />
                    )}
                />
                <Controller
                    name="state"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.state ? true : false} {...field}
                            helperText={errors.state ? 'Campo requerido' : ''}
                            {...field} label="Estado"
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.city ? true : false} {...field}
                            helperText={errors.city ? 'Campo requerido' : ''}
                            {...field} label="Ciudad"
                        />
                    )}
                />
                <Controller
                    name="street_name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.street_name ? true : false} {...field}
                            helperText={errors.street_name ? 'Campo requerido' : ''}
                            {...field} label="Calle"
                        />
                    )}
                />
                <Controller
                    name="zip_code"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.zip_code ? true : false} {...field}
                            helperText={errors.zip_code ? 'Campo requerido' : ''}
                            type="number" {...field}
                            label="Código postal"
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            error={errors.phone ? true : false} {...field}
                            helperText={errors.phone ? 'Campo requerido' : ''}
                            type="number" {...field}
                            label="Teléfono"
                        />
                    )}
                />
                <Box display="flex" justifyContent="center">
                    <Button sx={{ width: '100%' }} type="submit" variant="contained" color="info">Finalizar orden</Button>
                </Box>
            </Stack>
        </form>
    )
}
