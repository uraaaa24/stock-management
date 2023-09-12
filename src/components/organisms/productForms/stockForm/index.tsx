import NumericForm from '../baseForms/numericForm'

type StockFormProps = {
    name?: string
}

const StockForm = ({ name = 'stock' }: StockFormProps) => {
    return <NumericForm name={name} requiredMessage="商品個数を入力してください" label="商品個数" placeholder="100" />
}

export default StockForm
