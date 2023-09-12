import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { DUMMY_COLORS } from '../../../../../dummyData/color'

type ColorFormProps = {
    name?: string
}

const ColorForm = ({ name = 'color' }: ColorFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: '色を選択してください' }}
                defaultValue=""
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <InputLabel>
                                <Typography variant="h5">色</Typography>
                            </InputLabel>
                            <FormControl fullWidth error={fieldState.invalid}>
                                <Select
                                    {...field}
                                    displayEmpty
                                    id={name}
                                    labelId={name}
                                    renderValue={(selected: string) => {
                                        if (selected === '') {
                                            return <>色を選択してください</>
                                        }
                                    }}
                                >
                                    {DUMMY_COLORS.map((color) => (
                                        <MenuItem key={color} value={color}>
                                            {color}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{fieldState.error?.message}</FormHelperText>
                            </FormControl>
                        </>
                    )
                }}
            />
        </>
    )
}

export default ColorForm
