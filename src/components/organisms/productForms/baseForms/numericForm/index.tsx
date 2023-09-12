import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type NumericFormProps = {
    name: string
    requiredMessage?: string
    label: string
    placeholder: string
}

const NumericForm = ({ name, requiredMessage, label, placeholder }: NumericFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: { value: !!requiredMessage, message: requiredMessage ?? '' },
                    pattern: {
                        value: /^(([1-9]\d*)(\.\d+)?|0\.((0+[1-9]+)+|0*[1-9]+))$/,
                        message: '数字を入力してください'
                    }
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
                                type="text"
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

export default NumericForm
