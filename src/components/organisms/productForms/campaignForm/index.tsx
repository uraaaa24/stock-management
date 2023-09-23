import {
    Box,
    Checkbox,
    Chip,
    FormControl,
    FormHelperText,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography
} from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DUMMY_CAMPAIGNS } from '../../../../../dummyData/campaign'

type CampaignFormProps = {
    name?: string
}

const CampaignForm = ({ name = 'campaign' }: CampaignFormProps) => {
    const { control, setValue } = useFormContext()
    const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([])

    const handleChange = (event: SelectChangeEvent<typeof selectedCampaigns>) => {
        const {
            target: { value }
        } = event

        if (typeof value === 'string') return
        setValue(name, value)
        setSelectedCampaigns(value)
    }

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: '商品名を選択してください' }}
                defaultValue={[]}
                render={({ field, fieldState }) => {
                    return (
                        <>
                            <InputLabel>
                                <Typography variant="h5">キャンペーン</Typography>
                            </InputLabel>
                            <FormControl fullWidth error={fieldState.invalid}>
                                <Select
                                    {...field}
                                    id={name}
                                    multiple={true}
                                    displayEmpty={true}
                                    value={selectedCampaigns}
                                    onChange={handleChange}
                                    renderValue={(selected: string[]) => {
                                        if (selected.length === 0) return <>キャンペーンを選択してください</>
                                        return (
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )
                                    }}
                                >
                                    {DUMMY_CAMPAIGNS.map((campaign) => (
                                        <MenuItem key={campaign} value={campaign}>
                                            <Checkbox checked={selectedCampaigns.indexOf(campaign) > -1} />
                                            <ListItemText primary={campaign} />
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

export default CampaignForm
