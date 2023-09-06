import ProductNameForm from "@/components/organisms/productForms/productNameForm"
import { getDefaultLayout } from "@/components/templates/layout"
import { NextPageWithLayout } from "@/pages/_app"
import { Grid, Paper, Typography } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"

const Create: NextPageWithLayout = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <Paper elevation={4} sx={{ maxWidth: 800, mx: "auto", my: 6 }}>
                <Grid container component={"form"} rowSpacing={4} sx={{ justifyContent: "space-between", my: 0, mx: "auto", width: 400 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4">新規発注登録</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <ProductNameForm name="productName" />
                    </Grid>

                </Grid>
            </Paper>
        </FormProvider>
    )
}

Create.getLayout = getDefaultLayout

export default Create
