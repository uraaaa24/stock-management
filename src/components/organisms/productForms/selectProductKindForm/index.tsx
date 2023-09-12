import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { DUMMY_KINDS } from '../../../../../dummyData/kinds'

type SelectProductKindFormProps = {
    name?: string
}

const SelectProductKindForm = ({ name = 'productKind' }: SelectProductKindFormProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: '選択してください' }}
                defaultValue=""
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <InputLabel>
                                <Typography variant="h5">種類</Typography>
                            </InputLabel>

                            <FormControl fullWidth>
                                <Select
                                    {...field}
                                    displayEmpty
                                    id={name}
                                    labelId={name}
                                    renderValue={(selected: string) => {
                                        if (selected === '') {
                                            return <Typography variant="h5">選択してください</Typography>
                                        }
                                        return selected
                                    }}
                                    error={fieldState.invalid}
                                >
                                    {DUMMY_KINDS.map((kind) => (
                                        <MenuItem key={kind} value={kind}>
                                            {kind}
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

export default SelectProductKindForm
