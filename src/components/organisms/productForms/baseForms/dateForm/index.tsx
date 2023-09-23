import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type DateFormProps = {
    name: string
    requiredMessage?: string
    label: string
    placeholder: string
}

const DateForm = ({ name, requiredMessage, label, placeholder }: DateFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: { value: !!requiredMessage, message: requiredMessage ?? '' }
                }}
                defaultValue=""
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <InputLabel htmlFor={name}>
                                <Typography variant="h5">{label}</Typography>
                            </InputLabel>
                            <TextField
                                {...field}
                                id={name}
                                type="date"
                                variant="outlined"
                                placeholder={placeholder}
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                fullWidth={true}
                            />
                        </>
                    )
                }}
            />
        </>
    )
}

export default DateForm
