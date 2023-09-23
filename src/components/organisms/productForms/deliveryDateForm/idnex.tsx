import DateForm from '../baseForms/dateForm'

type DeliveryDateFormProps = {
    name?: string
}

const DeliveryDateForm = ({ name = 'deliveryDate' }: DeliveryDateFormProps) => {
    return <DateForm name={name} label="納品日" requiredMessage="納品日を入力してください" placeholder="" />
}

export default DeliveryDateForm
