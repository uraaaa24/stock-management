import DateForm from '../baseForms/dateForm'

type OrderDateFormProps = {
    name?: string
}

const OrderDateForm = ({ name = 'orderDate' }: OrderDateFormProps) => {
    return <DateForm name={name} label="注文日" requiredMessage="注文日を入力してください" placeholder="" />
}

export default OrderDateForm
