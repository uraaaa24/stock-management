import NumericForm from '../baseForms/numericForm'

type PriceFormProps = {
    name?: string
}

const PriceForm = ({ name = 'price' }: PriceFormProps) => {
    return <NumericForm name={name} requiredMessage="単価を入力してください" label="単価" placeholder="10000" />
}

export default PriceForm
