import { FormProvider, useForm } from "react-hook-form"

const Create = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>create</FormProvider>
    )
}

export default Create
