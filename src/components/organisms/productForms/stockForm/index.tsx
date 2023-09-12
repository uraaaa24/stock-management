import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type StockFormProps = {
    name?: string
}

const StockForm = ({ name = 'stock' }: StockFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: { value: true, message: '入力してください' },
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
                                <Typography variant="h5">個数</Typography>
                            </InputLabel>
                            <TextField
                                {...field}
                                id={name}
                                type="text"
                                variant="outlined"
                                placeholder="10"
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

export default StockForm
