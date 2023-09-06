import { Paper } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"

const Create = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <Paper elevation={4} sx={{maxWidth: 800, mx: "auto", my: 6}}>新規発注登録</Paper>
        </FormProvider>
    )
}

export default Create
