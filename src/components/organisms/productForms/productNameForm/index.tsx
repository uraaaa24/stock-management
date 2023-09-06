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
                    return <>Hello</>
                }}
            />
        </>
    )
}

export default ProductNameForm
