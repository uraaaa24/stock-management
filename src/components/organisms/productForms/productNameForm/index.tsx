import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type ProductNameFormProps = {
    name?: string
}

const ProductNameForm = ({ name = 'productName' }: ProductNameFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: '商品名を入力してください' }}
                defaultValue=""
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <InputLabel htmlFor={name}>
                                <Typography variant="h5">商品名</Typography>
                            </InputLabel>
                            <TextField
                                {...field}
                                id={name}
                                type="text"
                                variant="outlined"
                                placeholder="ソファー"
                                error={fieldState.invalid}
                                helperText={fieldState.error?.message}
                                fullWidth
                            />
                        </>
                    )
                }}
            />
        </>
    )
}

export default ProductNameForm
