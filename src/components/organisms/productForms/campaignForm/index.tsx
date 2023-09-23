import { useFormContext } from 'react-hook-form'

type CampaignFormProps = {
    name?: string
}

const CampaignForm = ({ name = 'campaign' }: CampaignFormProps) => {
    const { control } = useFormContext()

    return <></>
}

export default CampaignForm
